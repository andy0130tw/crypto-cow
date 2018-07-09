import {MDCTemporaryDrawer} from '@material/drawer';
import {MDCRipple}          from '@material/ripple';
import {MDCDialog}          from '@material/dialog';
import {MDCTextField}       from '@material/textfield';
import {MDCSnackbar}        from '@material/snackbar';

import watcher from './watcher';
import utils from './utils';
import { addrContract, etherscanDomain } from './constants';

let web3 = utils.getWeb3Instance();

let drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

let menuButton = document.getElementById('menuButton');
let menuButtonRipple = new MDCRipple(menuButton);
menuButtonRipple.unbounded = true;

const buySellDialog = new MDCDialog(document.getElementById('my-mdc-dialog'));

menuButton.disabled = false;
menuButton.addEventListener('click', () => {
  drawer.open = true;
});

const snackbar = new MDCSnackbar(document.getElementById('my-mdc-snackbar'));
snackbar.dismissesOnAction = false;

let buySellStateIsBuy = true;

const buyCowFragment = document.getElementById('buyCowFragment');
const buyEthWrapper = new MDCTextField(buyCowFragment.querySelector('.--buySellEthWrapper'));
const buyCowWrapper = new MDCTextField(buyCowFragment.querySelector('.--buySellCowWrapper'));
const buyCowAmountField = buyCowFragment.querySelector('.--buySellEthField');

const sellCowFragment = document.getElementById('sellCowFragment');
const sellEthWrapper = new MDCTextField(sellCowFragment.querySelector('.--buySellEthWrapper'));
const sellCowWrapper = new MDCTextField(sellCowFragment.querySelector('.--buySellCowWrapper'));
const sellCowAmountField = sellCowFragment.querySelector('.--buySellCowField');

function updateDialogContent() {
  if (buySellStateIsBuy) {
    document.getElementById('my-mdc-dialog-label').textContent = '買牛';
    buyCowFragment.style.display = 'block';
    sellCowFragment.style.display = 'none';
  } else {
    document.getElementById('my-mdc-dialog-label').textContent = '賣牛';
    buyCowFragment.style.display = 'none';
    sellCowFragment.style.display = 'block';
  }
}

function updateBuySellPrice() {
  return Promise.all([
    watcher.getBuyPrice(web3.utils.toWei('0.1')),
    watcher.getSellPrice(web3.utils.toWei('1'))
  ])
    .then(([buyPrice, sellPrice]) => {
      document.getElementById('priceBuyInEth').textContent = (parseFloat(buyPrice)).toFixed(6);
      document.getElementById('priceSellInEth').textContent = (parseFloat(sellPrice)).toFixed(6);
    });
}

document.getElementById('menuBuy').addEventListener('click', () => {
  buySellStateIsBuy = true;
  updateDialogContent();
  buySellDialog.show();
  updateBuySellPrice();
});

document.getElementById('menuSell').addEventListener('click', () => {
  buySellStateIsBuy = false;
  updateDialogContent();
  buySellDialog.show();
  updateBuySellPrice();
});

['propertychange', 'change', 'click', 'keyup', 'input', 'paste'].forEach(evtName => {
  buyCowAmountField.addEventListener(evtName, evt => {
    let resultField = buyCowFragment.querySelector('.--buySellCowField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }
    try {
      let value = web3.utils.toWei(evt.target.value);
      watcher.getBuyPrice(value).then(price => {
        resultField.value = parseFloat(price).toFixed(6);
      });
    } catch (err) {
      console.log(err);
    }
  });
  sellCowAmountField.addEventListener(evtName, evt => {
    let resultField = sellCowFragment.querySelector('.--buySellEthField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }
    try {
      let value = web3.utils.toWei(evt.target.value);
      watcher.getSellPrice(value).then(price => {
        resultField.value = parseFloat(price).toFixed(6);
      });
    } catch (err) {
      console.log(err);
    }
  });
});

buySellDialog.listen('MDCDialog:accept', () => {
  if (buySellStateIsBuy) {
    web3.eth.sendTransaction({
      from: web3.eth.defaultAccount,
      to: addrContract,
      value: web3.utils.toWei(buyCowAmountField.value)
    }).on('transactionHash', hash => {
      drawer.open = false;
      snackbar.show({
        message: '交易成功，正在等待上鏈',
        actionText: '在 Etherscan 上查看',
        timeout: 15000,
        multiline: true,
        actionHandler: () => {
          window.open(`https://${etherscanDomain}/tx/${hash}`);
        }
      });
    });
  } else {
    let contract = utils.getContract(addrContract)
      .then(contract => {
        let amount = web3.utils.toWei(sellCowAmountField.value);
        // XXX: should be modified to camel case in contract + ABI
        contract.methods.selltoken(amount).send({
          from: web3.eth.defaultAccount
        }).on('transactionHash', hash => {
          drawer.open = false;
          snackbar.show({
            message: '交易成功，正在等待上鏈',
            actionText: '在 Etherscan 上查看',
            timeout: 15000,
            multiline: true,
            actionHandler: () => {
              window.open(`https://${etherscanDomain}/tx/${hash}`);
            }
          });
        });
      });
  }
});

export default {
  drawer,
  menuButton,
  buySellDialog
};

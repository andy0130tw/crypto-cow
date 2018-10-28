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
    watcher.getBuyAmount(web3.utils.toWei('0.1')),
    watcher.getSellPrice(web3.utils.toWei('1'))
  ])
    .then(([buyPrice, sellPrice]) => {
      document.getElementById('priceBuyInEth').textContent = parseFloat(buyPrice).toFixed(6);
      document.getElementById('priceSellInEth').textContent = parseFloat(sellPrice).toFixed(6);
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
    let value;
    try {
      value = web3.utils.toWei(evt.target.value);
    } catch (err) {}
    if (value == null) return false;

    watcher.getBuyAmount(value)
      .then(amount => {
        resultField.value = amount ? parseFloat(amount).toFixed(6) : '0';
      });
  });

  sellCowAmountField.addEventListener(evtName, evt => {
    let resultField = sellCowFragment.querySelector('.--buySellEthField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }
    let value;
    try {
      value = web3.utils.toWei(evt.target.value);
    } catch (err) {}
    if (value == null) return false;

    watcher.getSellPrice(value)
      .then(price => {
        resultField.value = price ? parseFloat(price).toFixed(6) : '0';
      });
  });
});

buySellDialog.listen('MDCDialog:accept', () => {
  function txSentHandler(hash) {
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
  }

  function tryConvertToWei(val) {
    let amount;
    try {
      amount = web3.utils.toWei(val);
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
    return amount;
  }

  utils.getContract(addrContract).then(contract => {
    if (buySellStateIsBuy) {
      let value = tryConvertToWei(buyCowAmountField.value)
      if (!value) return;
      contract.methods.buyToken().send({
        from: web3.eth.defaultAccount,
        value: value
      }).on('transactionHash', txSentHandler);
    } else {
      let amount = tryConvertToWei(sellCowAmountField.value);
      if (!amount) return;
      // XXX: should be modified to camel case in contract + ABI
      contract.methods.selltoken(amount).send({
        from: web3.eth.defaultAccount
      }).on('transactionHash', txSentHandler);
    }
  });
});

export default {
  drawer,
  menuButton,
  buySellDialog
};
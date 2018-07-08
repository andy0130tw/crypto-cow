import {MDCTemporaryDrawer} from '@material/drawer';
import {MDCRipple}          from '@material/ripple';
import {MDCDialog}          from '@material/dialog';
import {MDCTextField}       from '@material/textfield';

import watcher from './watcher';
import utils from './utils';

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

let buySellStateIsBuy = true;

const buyCowFragment = document.getElementById('buyCowFragment');
const buyEthWrapper = new MDCTextField(buyCowFragment.querySelector('.--buySellEthWrapper'));
const buyCowWrapper = new MDCTextField(buyCowFragment.querySelector('.--buySellCowWrapper'));

const sellCowFragment = document.getElementById('sellCowFragment');
const sellEthWrapper = new MDCTextField(sellCowFragment.querySelector('.--buySellEthWrapper'));
const sellCowWrapper = new MDCTextField(sellCowFragment.querySelector('.--buySellCowWrapper'));

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

document.getElementById('menuBuy').addEventListener('click', () => {
  buySellStateIsBuy = true;
  updateDialogContent();
  buySellDialog.show();
});

document.getElementById('menuSell').addEventListener('click', () => {
  buySellStateIsBuy = false;
  updateDialogContent();
  buySellDialog.show();
});

['propertychange', 'change', 'click', 'keyup', 'input', 'paste'].forEach(evtName => {
  buyCowFragment.querySelector('.--buySellEthField').addEventListener(evtName, evt => {
    if (!evt.target.value) return;
    try {
      let value = web3.utils.toWei(evt.target.value);
      watcher.getBuyPrice(value).then(price => {
        buyCowFragment.querySelector('.--buySellCowField').value = parseFloat(price).toFixed(6);
      });
    } catch (err) {
      console.log(err);
    }
  });
  sellCowFragment.querySelector('.--buySellCowField').addEventListener(evtName, evt => {
    if (!evt.target.value) return;
    try {
      let value = web3.utils.toWei(evt.target.value);
      watcher.getSellPrice(value).then(price => {
        sellCowFragment.querySelector('.--buySellEthField').value = parseFloat(price).toFixed(6);
      });
    } catch (err) {
      console.log(err);
    }
  });
});

buySellDialog.listen('MDCDialog:accept', () => {
  if (buySellStateIsBuy) {
    //
  } else {
    //
  }
});

Promise.all([
  watcher.getBuyPrice(web3.utils.toWei('0.1')),
  watcher.getSellPrice(web3.utils.toWei('1'))
])
  .then(([buyPrice, sellPrice]) => {
    document.getElementById('priceBuyInEth').textContent = (parseFloat(buyPrice)).toFixed(6);
    document.getElementById('priceSellInEth').textContent = (parseFloat(sellPrice)).toFixed(6);
  });

export default {
  drawer,
  menuButton,
  buySellDialog
};

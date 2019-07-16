import {MDCDrawer}         from '@material/drawer';
import {MDCRipple}         from '@material/ripple';
import {MDCDialog}         from '@material/dialog';
import {MDCTextField}      from '@material/textfield';
import {MDCSnackbar}       from '@material/snackbar';
import {MDCNotchedOutline} from '@material/notched-outline';
import {MDCList}           from '@material/list';
import {MDCSelect}         from '@material/select';

import watcher from './watcher';
import utils from './utils';
import {
  addrContract,
  etherscanDomain,
  tokens,
  cowSwapAddress
} from './constants';

const web3 = utils.getWeb3Instance();

// --- drawer ---
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const navLinks = MDCList.attachTo(document.getElementById('navLinks'));

// --- hamburger icon ---
const menuButton = document.getElementById('menuButton');
const menuButtonRipple = new MDCRipple(menuButton);
menuButtonRipple.unbounded = true;

menuButton.disabled = false;
menuButton.addEventListener('click', () => {
  drawer.open = true;
});

// --- modals ---
const buySellDialog = new MDCDialog(document.getElementById('my-mdc-dialog'));
const transferDialog = new MDCDialog(document.getElementById('my-mdc-dialog2'));
const erc20BuyDialog = new MDCDialog(document.getElementById('mdc-dialog-erc20-buy'));

// --- notification ---
const snackbar = new MDCSnackbar(document.getElementById('my-mdc-snackbar'));
snackbar.dismissesOnAction = false;

// --- input fields ---
const buyCowFragment = document.getElementById('buyCowFragment');
const buyEthWrapper = new MDCTextField(buyCowFragment.querySelector('.--buySellEthWrapper'));
const buyCowWrapper = new MDCTextField(buyCowFragment.querySelector('.--buySellCowWrapper'));
const buyCowAmountField = buyCowFragment.querySelector('.--buySellEthField');

const sellCowFragment = document.getElementById('sellCowFragment');
const sellEthWrapper = new MDCTextField(sellCowFragment.querySelector('.--buySellEthWrapper'));
const sellCowWrapper = new MDCTextField(sellCowFragment.querySelector('.--buySellCowWrapper'));
const sellCowAmountField = sellCowFragment.querySelector('.--buySellCowField');

const transferCowFragment = document.getElementById('transferCowFragment');
const transferCowWrapper = new MDCTextField(transferCowFragment.querySelector('.--transferCowWrapper'));
const transferAddressWrapper = new MDCTextField(transferCowFragment.querySelector('.--transferAddressWrapper'));
const transferCowAmountField = transferCowFragment.querySelector('.--transferCowField');
const transferCowAddressField = transferCowFragment.querySelector('.--transferAddressField');

const erc20BuyCowFragment = document.getElementById('erc20BuyCowFragment');
const erc20AmountWrapper = new MDCTextField(erc20BuyCowFragment.querySelector('.--erc20AmountWrapper'));
const erc20AmountField = erc20BuyCowFragment.querySelector('.--erc20AmountField');
const erc20tokenSelect = new MDCSelect(erc20BuyCowFragment.querySelector('.--erc20TokenSelect'));
const erc20BuyCowAmountWrapper = new MDCTextField(erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountWrapper'));
const erc20BuyCowAmountField = erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountField');
const erc20ApproveButton = document.querySelector('.--erc20ApproveButton');
const erc20BuyConfirmButton = document.querySelector('.--erc20BuyButton');

// --- my link ---
const copyMyLinkButton = document.getElementById('copyMyLink');
// FIXME: incorrect ripple position!
const copyMyLinkRipple = new MDCRipple(copyMyLinkButton);

let buySellStateIsBuy = true;

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
    document.querySelectorAll('.priceBuyInEth').forEach(elem => {
      elem.textContent =
        buyPrice ? parseFloat(buyPrice).toFixed(6) : '(N/A)';
    })
    document.querySelectorAll('.priceSellInEth').forEach(elem => {
      elem.textContent =
        sellPrice ? parseFloat(sellPrice).toFixed(6) : '(N/A)';
    })
  });
}

function updateTokenSelectItems () {
  const items = Object.keys(tokens).map(address => {
    const li = document.createElement('li')
    li.classList.add('mdc-list-item')
    li.setAttribute('data-value', address)
    li.textContent = tokens[address].symbol
    return li
  })
  const menuList = document.querySelector('.mdc-select__menu > .mdc-list')
  menuList.append(...items)
}

document.getElementById('menuBuy').addEventListener('click', evt => {
  evt.preventDefault();
  buySellStateIsBuy = true;
  updateDialogContent();
  buySellDialog.open();
  updateBuySellPrice();
});

document.getElementById('menuSell').addEventListener('click', evt => {
  evt.preventDefault();
  buySellStateIsBuy = false;
  updateDialogContent();
  buySellDialog.open();
  updateBuySellPrice();
});

document.getElementById('menuTransfer').addEventListener('click', evt => {
  evt.preventDefault();
  transferDialog.open();
});

document.getElementById('menuERC20Buy').addEventListener('click', evt => {
  evt.preventDefault();
  erc20BuyDialog.open();
  updateBuySellPrice();
  updateTokenSelectItems();
})

copyMyLinkButton.addEventListener('click', evt => {
  evt.preventDefault();
  document.getElementById('myLink').select();
  document.execCommand('copy');
});

erc20ApproveButton.addEventListener('click', evt => {
  evt.preventDefault();
  const amount = erc20AmountField.value;
  const tokenAddress = erc20tokenSelect.value;
  if (!amount) return false
  const rawAmount = amount * Math.pow(10, tokens[tokenAddress].decimals)
  utils.getContract(tokenAddress).then(contract => {
    contract.methods.approve(cowSwapAddress, rawAmount).send({ from: web3.eth.defaultAccount}, (err, transactionHash) => {
      if (err) {
        erc20BuyConfirmButton.disabled = true;
      } else {
        utils.pollTransactionReceipt(transactionHash).then(receipt => {
          erc20BuyConfirmButton.disabled = false;
        });
      }
    });
  });
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

  transferCowAddressField.addEventListener(evtName, evt => {
    // const isAddress = web3.utils.isAddress(evt.target.value);
  })

  erc20AmountField.addEventListener(evtName, evt => {
    const tokenAddress = erc20tokenSelect.value;
    if (!tokenAddress) return false;
    const resultField = erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountField');
    if (evt.target.value === '') {
      resultField.value = '0';
      return;
    }

    const value = Number.parseFloat(evt.target.value) * Math.pow(10, tokens[tokenAddress].decimals)
    if (!value) return false;
    watcher.getBuyAmountWithErc20(value.toString(), tokens[tokenAddress].exchangeAddress)
      .then(price => {
        resultField.value = price ? parseFloat(price).toFixed(6) : '0';
      });
  });
});

(() => {
  function tryConvertToWei(val) {
    let amount;
    try {
      if (+val < 0) throw new Error('');
      amount = web3.utils.toWei(val);
    } catch (err) {
      alert('請填入有效數值。');
      console.error(err);
    }
    return amount;
  }

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

  function txConfirmedHandler(hash) {
    snackbar.show({
      message: '交易已被確認！',
      actionText: '重新載入',
      timeout: 5000,
      multiline: true,
      actionHandler: () => {
        location.reload();
      }
    });
  }

  buySellDialog.listen('MDCDialog:closing', ({ detail }) => {
    const { action } = detail;
    if (action == 'close') return;
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
        }).on('transactionHash', txSentHandler)
          .on('receipt', txConfirmedHandler);
      }
    });
  });

  transferDialog.listen('MDCDialog:closing', ({ detail }) => {
    const { action } = detail;
    if (action == 'close') return;
    utils.getContract(addrContract).then(contract => {
      let amount = tryConvertToWei(transferCowAmountField.value);
      if (!amount) return;

      let addr = transferCowAddressField.value;
      if (!web3.utils.isAddress(addr)) {
        alert('請輸入有效的錢包地址。');
        return;
      }

      contract.methods.transfer(addr, amount).send({
        from: web3.eth.defaultAccount
      }).on('transactionHash', txSentHandler)
        .on('receipt', txConfirmedHandler);
    });
  });

  erc20AmountField.addEventListener('change', () => {
    erc20BuyConfirmButton.disabled = true;
  });

  erc20tokenSelect.listen('MDCSelect:change', () => {
    erc20BuyConfirmButton.disabled = true;
    const resultField = erc20BuyCowFragment.querySelector('.--erc20BuyCowAmountField');
    const amount = erc20AmountField.value;
    const tokenAddress = erc20tokenSelect.value;
    if (!amount || !tokenAddress) return false;

    const value = Number.parseFloat(amount) * Math.pow(10, tokens[tokenAddress].decimals)
    if (!value) return false;
    watcher.getBuyAmountWithErc20(value.toString(), tokens[tokenAddress].exchangeAddress)
      .then(price => {
        resultField.value = price ? parseFloat(price).toFixed(6) : '0';
      });
  });

  erc20BuyDialog.listen('MDCDialog:closing', ({ detail }) => {
    const { action } = detail;
    if (action == 'close') return;
    const amount = erc20AmountField.value;
    const tokenAddress = erc20tokenSelect.value;
    const rawAmount = amount * Math.pow(10, tokens[tokenAddress].decimals)
    utils.getSwapContract(cowSwapAddress).then(contract => {
      contract.methods.tokenToCow(tokenAddress, rawAmount)
        .send({ from: web3.eth.defaultAccount })
        .on('transactionHash', txSentHandler);
    })
  })
})();


function _fillTransferForm(addr) {
  transferCowFragment.querySelector('label').classList.add('mdc-floating-label--float-above');
  transferCowAddressField.value = addr;
}

export default {
  drawer,
  menuButton,
  buySellDialog,
  transferDialog,

  _fillTransferForm,
};

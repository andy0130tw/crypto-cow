import BN from 'bn.js';

import utils from './utils';
import { addrContract } from './constants';

let web3 = utils.getWeb3Instance();

function _deductFor0xBeef(p) {
  let pBN = new BN(p);
  return pBN.sub(pBN.divn(40));
}

function getBuyAmount(price) {
  return utils.getContract(addrContract)
    .then(contract => {
      return contract.methods.calculateTokenBuySimple(price).call();
    })
    .then(amount => {
      let dec = web3.utils.fromWei(_deductFor0xBeef(amount));
      return Promise.resolve(dec);
    })
    .catch(err => Promise.resolve(null));
}

function getSellPrice(amount) {
  return utils.getContract(addrContract)
    .then(contract => {
      return contract.methods.calculateTokenSell(amount).call();
    })
    .then(price => {
      let dec = web3.utils.fromWei(_deductFor0xBeef(price));
      return Promise.resolve(dec);
    })
    .catch(err => Promise.resolve(null));
}

export default {
  getBuyAmount,
  getSellPrice
};

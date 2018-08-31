import BN from 'bn.js';

import utils from './utils';
import { addrContract } from './constants';

let web3 = utils.getWeb3Instance();

function _deductPrice(p) {
  let pBN = new BN(p);
  return pBN.sub(pBN.divn(40));
}

function getBuyPrice(price) {
  return utils.getContract(addrContract)
    .then(contract => {
      return contract.methods.calculateTokenBuySimple(price).call();
    })
    .then(price => {
      let priceDecimal = web3.utils.fromWei(_deductPrice(price));
      return Promise.resolve(priceDecimal);
    });
}

function getSellPrice(price) {
  let priceReal = _deductPrice(price);
  return utils.getContract(addrContract)
    .then(contract => {
      return contract.methods.calculateTokenSell(price).call();
    })
    .then(price => {
      let priceDecimal = web3.utils.fromWei(_deductPrice(price));
      return Promise.resolve(priceDecimal);
    });
}

export default {
  getBuyPrice,
  getSellPrice
};

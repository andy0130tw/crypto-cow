import utils from './utils';
import { addrContract } from './constants';

let web3 = utils.getWeb3Instance();

function getBuyPrice(price) {
  return utils.getContract(addrContract)
    .then(contract => {
      return contract.methods.calculateTokenBuySimple(price).call();
    })
    .then(price => {
      let priceDecimal = web3.utils.fromWei(price);
      return Promise.resolve(priceDecimal);
    });
}

function getSellPrice(price) {
  return utils.getContract(addrContract)
    .then(contract => {
      return contract.methods.calculateTokenSell(price).call();
    })
    .then(price => {
      let priceDecimal = web3.utils.fromWei(price);
      return Promise.resolve(priceDecimal);
    });
}

export default {
  getBuyPrice,
  getSellPrice
};

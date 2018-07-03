export default {
  getMetaMaskProvider() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    let global = (new Function('return this;'))();

    if (typeof global.web3 == 'undefined') {
      return null;
    }

    // Use the browser's ethereum provider
    return global.web3.currentProvider;
  },

  getABI() {
    return fetch('assets/abi.json')
      .then(respObj => respObj.json());
  }
}

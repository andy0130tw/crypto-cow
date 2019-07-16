import Web3 from 'web3';

let web3Instance = null;
let contractCache = {};

function getMetaMaskProvider() {
  const prov = Web3.givenProvider;
  if (prov && web3Instance) {
    // Use the browser's ethereum provider
    web3Instance.setProvider(prov);
  }
  return prov;
}

function getContract(addr) {
  if (contractCache[addr]) {
    return Promise.resolve(contractCache[addr]);
  }

  return fetch('assets/abi.json')
    .then(respObj => respObj.json())
    .then(abi => {
      contractCache[addr] = new web3Instance.eth.Contract(abi, addr);
      return Promise.resolve(contractCache[addr]);
    });
}

function getWeb3Instance() {
  if (!web3Instance) {
    web3Instance = new Web3();
    getMetaMaskProvider();
  }
  return web3Instance;
}

function pollTransactionReceipt (transactionHash) {
  const interval = 1000
  const getTransactionReceiptPromise = transactionHash => {
    return new Promise((resolve, reject) => {
      web3Instance.eth.getTransactionReceipt(transactionHash, (err, receipt) => {
        if (err) reject(err)
        else resolve(receipt)
      })
    })
  }

  const checkCondition = (resolve, reject) => {
    getTransactionReceiptPromise(transactionHash)
      .then(receipt => {
        if (receipt) {
          resolve(receipt)
        } else {
          setTimeout(checkCondition, interval, resolve, reject)
        }
      })
  }
  
  return new Promise(checkCondition)
}

export default {
  getMetaMaskProvider,
  getContract,
  getWeb3Instance,
  pollTransactionReceipt
};

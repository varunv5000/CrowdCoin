import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //checks to see if we are on the server or if we are on the browser
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/ef7d3f3e171b465fa3a7814ec7526fd5'
  );
  web3 = new Web3(provider);
}

export default web3;

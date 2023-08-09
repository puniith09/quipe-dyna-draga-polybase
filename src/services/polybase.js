import Web3 from './web3';

class Polybase {
  constructor() {
    this.web3 = new Web3();
    this.polybase = null;
  }

  async init() {
    this.polybase = await this.web3.getPolybaseInstance();
  }

  async storeData(userName, hashId) {
    try {
      const transaction = await this.polybase.methods.storeData(userName, hashId).send();
      return transaction;
    } catch (error) {
      console.error('Error while storing data in Polybase:', error);
    }
  }

  async getData(userName) {
    try {
      const data = await this.polybase.methods.getData(userName).call();
      return data;
    } catch (error) {
      console.error('Error while retrieving data from Polybase:', error);
    }
  }
}

export default Polybase;
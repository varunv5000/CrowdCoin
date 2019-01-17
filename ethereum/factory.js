import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xbd741C2Ca7395e5E21A44BDD36cd9C1145916412'
);
export default instance;

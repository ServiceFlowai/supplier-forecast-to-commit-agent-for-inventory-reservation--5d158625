import axios from 'axios';

class IntegrationLayer {
  async fetchERPData() {
    // Mock fetching ERP data
    return axios.get('/connectors/mock/erp');
  }

  async fetchAPSData() {
    // Mock fetching APS data
    return axios.get('/connectors/mock/aps');
  }

  async fetchSRMData() {
    // Mock fetching SRM data
    return axios.get('/connectors/mock/srm');
  }

  async fetchWMSData() {
    // Mock fetching WMS data
    return axios.get('/connectors/mock/wms');
  }
}

export default new IntegrationLayer();
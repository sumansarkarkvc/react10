import axios from "axios";

const ADD_STOCK_BASE_URL = "https://stock10.azurewebsites.net/api/v1.0/market/stock/add"

const STOCK_BY_COMPANY_CODE = "https://stock10.azurewebsites.net/api/v1.0/market/stock/info"

class StockService {
    addStock(stock, companyCode) {
        return axios.post(ADD_STOCK_BASE_URL + '/' + companyCode, stock);
    }

    getStockByCode(companyCode) {
        return axios.get(STOCK_BY_COMPANY_CODE + '/' + companyCode);
    }
}

export default new StockService();
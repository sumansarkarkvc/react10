import axios from 'axios';

const COMPANY_LIST_BASE_URL = "https://company10.azurewebsites.net/api/v1.0/market/company/getcompany";

const ADD_COMPANY_BASE_URL = "https://company10.azurewebsites.net/api/v1.0/market/company/register";

const COMPANY_BY_COMPANY_CODE = "https://company10.azurewebsites.net/api/v1.0/market/company/details";

const UPDATE_COMPANY_DETAILS = "https://company10.azurewebsites.net/api/v1.0/market/company/update";

const DELETE_COMPANY_DETAILS = "https://company10.azurewebsites.net/api/v1.0/market/company/delete";

class CompanyService {

    getCompanies() {
        return axios.get(COMPANY_LIST_BASE_URL);
    }

    addCompany(company) {
        return axios.post(ADD_COMPANY_BASE_URL, company);
    }

    getCompanyByCode(companyCode) {
        return axios.get(COMPANY_BY_COMPANY_CODE + '/' + companyCode)
    }

    updateCompany(company, companyCode) {
        return axios.put(UPDATE_COMPANY_DETAILS + '/' + companyCode, company)
    }

    deleteCompany(companyCode) {
        return axios.delete(DELETE_COMPANY_DETAILS + '/' + companyCode)
    }
}

export default new CompanyService();
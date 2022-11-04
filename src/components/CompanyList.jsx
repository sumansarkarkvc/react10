import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CompanyService from "../services/CompanyService";

class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
    };
    this.addCompany = this.addCompany.bind(this);
    this.editCompany = this.editCompany.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.addStock = this.addStock.bind(this);
  }

  addStock(companyCode) {
    this.props.history.push(`/addstock/${companyCode}`)
  }

  deleteCompany(companyCode) {
    CompanyService.deleteCompany(companyCode).then(res => {
      this.setState({companies: this.state.companies.filter(company => company.companyCode !== companyCode)})
    })
  }

  viewCompany(companyCode) {
    this.props.history.push(`/view/${companyCode}`)
  }

  viewStock(companyCode) {
    this.props.history.push(`/stock/${companyCode}`)
  }

  editCompany(companyCode) {
    this.props.history.push(`/update/${companyCode}`)
  }

  componentDidMount() {
    CompanyService.getCompanies().then((res) => {
      this.setState({ companies: res.data });
    });
  }

  addCompany() {
    this.props.history.push("/add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Company List</h2>
        <div className="row">
          <button
            className="btn btn-primary"
            style={{ marginBottom: "10px", float: "right" }}
            onClick={this.addCompany}
          >
            Add New Company
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Company Code</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.companies.map((company) => (
                <tr key={company.companyCode}>
                  <td>{company.companyCode}</td>
                  <td>{company.companyName}</td>
                  <td>
                    <button onClick={ () => this.editCompany(company.companyCode)} className="btn btn-info">Update</button>
                    <button onClick={ () => this.viewCompany(company.companyCode)} className="btn btn-info" style={{marginLeft: "10px"}}>View</button>
                    <button onClick={ () => this.addStock(company.companyCode)} className="btn btn-info" style={{marginLeft: "10px"}}>Add Stock</button>
                    <button onClick={ () => this.viewStock(company.companyCode)} className="btn btn-info" style={{marginLeft: "10px"}}>View Stock</button>
                    <button onClick={ () => this.deleteCompany(company.companyCode)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyList);

import React, { Component } from "react";
import CompanyService from "../services/CompanyService";

class AddCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyCode: "",
      companyName: "",
      companyCeo: "",
      companyTurnover: "",
      companyWebsite: "",
      companyStockExchange: "",
    };

    this.changeCompanyCodeHandler = this.changeCompanyCodeHandler.bind(this);
    this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
    this.changeCompanyCeoHandler = this.changeCompanyCeoHandler.bind(this);
    this.changeCompanyTurnoverHandler = this.changeCompanyTurnoverHandler.bind(
      this
    );
    this.changeCompanyWebsiteHandler = this.changeCompanyWebsiteHandler.bind(
      this
    );
    this.changeCompanyStockExchangeHandler = this.changeCompanyStockExchangeHandler.bind(
      this
    );
    this.saveCompany = this.saveCompany.bind(this);
  }

  saveCompany = (e) => {
    e.preventDefault();

    let company = {
      companyCode: this.state.companyCode,
      companyName: this.state.companyName,
      companyCeo: this.state.companyCeo,
      companyTurnover: this.state.companyTurnover,
      companyWebsite: this.state.companyWebsite,
      companyStockExchange: this.state.companyStockExchange,
    };

    CompanyService.addCompany(company).then((res) => {
      this.props.history.push("/");
    });
  };

  cancel() {
    this.props.history.push("/");
  }

  changeCompanyCodeHandler = (event) => {
    this.setState({ companyCode: event.target.value });
  };

  changeCompanyNameHandler = (event) => {
    this.setState({ companyName: event.target.value });
  };

  changeCompanyCeoHandler = (event) => {
    this.setState({ companyCeo: event.target.value });
  };

  changeCompanyTurnoverHandler = (event) => {
    this.setState({ companyTurnover: event.target.value });
  };

  changeCompanyWebsiteHandler = (event) => {
    this.setState({ companyWebsite: event.target.value });
  };

  changeCompanyStockExchangeHandler = (event) => {
    this.setState({ companyStockExchange: event.target.value });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
        <h3 className="text-center">Add New Company</h3>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                      {" "}
                      Company Code:{" "}
                    </label>
                    <input
                      placeholder="Company Code"
                      name="companyCode"
                      className="form-control"
                      value={this.state.companyCode}
                      onChange={this.changeCompanyCodeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                      {" "}
                      Company Name:{" "}
                    </label>
                    <input
                      placeholder="Company Name"
                      name="companyName"
                      className="form-control"
                      value={this.state.companyName}
                      onChange={this.changeCompanyNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                      {" "}
                      Company CEO:{" "}
                    </label>
                    <input
                      placeholder="Company CEO"
                      name="companyCeo"
                      className="form-control"
                      value={this.state.companyCeo}
                      onChange={this.changeCompanyCeoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                      {" "}
                      Company Turnover:{" "}
                    </label>
                    <input
                      placeholder="Company Turnover"
                      name="companyTurnover"
                      className="form-control"
                      value={this.state.companyTurnover}
                      onChange={this.changeCompanyTurnoverHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                      {" "}
                      Company Website:{" "}
                    </label>
                    <input
                      placeholder="Company Website"
                      name="companyWebsite"
                      className="form-control"
                      value={this.state.companyWebsite}
                      onChange={this.changeCompanyWebsiteHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                      {" "}
                      Company Stock Exchange:{" "}
                    </label>
                    <input
                      placeholder="Company Stock Exchange"
                      name="companyStockExchange"
                      className="form-control"
                      value={this.state.companyStockExchange}
                      onChange={this.changeCompanyStockExchangeHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveCompany}
                    style={{ marginTop: "10px" }}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default AddCompany;

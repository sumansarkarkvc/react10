import React, { Component } from "react";
import CompanyService from "../services/CompanyService";

class ViewCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyCode: this.props.match.params.companyCode,
      companyDetails: [],
    };
  }

  componentDidMount() {
    CompanyService.getCompanyByCode(this.state.companyCode).then((res) => {
      this.setState({ companyDetails: res.data });
    });
  }

  home() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <h3 className="text-center">Company Details</h3>
        <div className="card col-md-6 offset-md-3">
          <div className="card-body">
            <div className="row">
              <label>
                Company Code -- {this.state.companyDetails.companyCode}{" "}
              </label>
            </div>
            <div className="row">
              <label>
                Company Name -- {this.state.companyDetails.companyName}{" "}
              </label>
            </div>
            <div className="row">
              <label>
                Company CEO -- {this.state.companyDetails.companyCeo}
              </label>
            </div>
            <div className="row">
              <label>
                Company Turnover -- {this.state.companyDetails.companyTurnover}
              </label>
            </div>
            <div className="row">
              <label>
                Company Website -- {this.state.companyDetails.companyWebsite}
              </label>
            </div>
          </div>
        </div>
        <button
          className="btn btn-info"
          onClick={this.home.bind(this)}
          style={{ alignItems: "center" }}
        >
          Home
        </button>
      </div>
    );
  }
}

export default ViewCompany;

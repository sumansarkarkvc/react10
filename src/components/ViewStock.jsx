import React, { Component } from "react";
import StockService from "../services/StockService";

class ViewStock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyCode: this.props.match.params.companyCode,
      stockDetails: [],
    };
  }

  componentDidMount() {
    StockService.getStockByCode(this.state.companyCode).then((res) => {
      this.setState({ stockDetails: res.data });
    });
  }

  home() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <h3 className="text-center">Stock Details</h3>
          <div className="card-body">
            <div className="row">
            <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Company Code</th>
                <th>Name</th>
                <th>Date Created</th>
              </tr>
            </thead>

            <tbody>
              {this.state.stockDetails.map((stock) => (
                <tr key={stock.stockId}>
                  <td>{stock.companyCode}</td>
                  <td>{stock.stockPrice}</td>
                  <td>{stock.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default ViewStock;
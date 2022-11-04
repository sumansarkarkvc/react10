import React, { Component } from "react";
import StockService from "../services/StockService";

class AddStock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyCode: this.props.match.params.companyCode,
      stockPrice: "",
    };

    this.changeCompanyCodeHandler = this.changeCompanyCodeHandler.bind(this);
    this.changeCompanyStockHandler = this.changeCompanyStockHandler.bind(this);
    this.saveStock = this.saveStock.bind(this);
  }

  saveStock = (e) => {
    e.preventDefault();

    let stock = {
      companyCode: this.state.companyCode,
      stockPrice: this.state.stockPrice
    };

    StockService.addStock(stock, this.state.companyCode).then((res) => {
      this.props.history.push("/");
    });
  };

  cancel() {
    this.props.history.push("/");
  }

  changeCompanyCodeHandler = (event) => {
    this.setState({ companyCode: event.target.value });
  };

  changeCompanyStockHandler = (event) => {
    this.setState({ stockPrice: event.target.value });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
        <h3 className="text-center">Add New Stock</h3>
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
                      Stock Price:{" "}
                    </label>
                    <input
                      placeholder="Stock Price"
                      name="stockPrice"
                      className="form-control"
                      value={this.state.stockPrice}
                      onChange={this.changeCompanyStockHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveStock}
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

export default AddStock;

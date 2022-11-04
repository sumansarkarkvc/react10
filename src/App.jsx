import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyList from "./components/CompanyList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddCompany from "./components/AddCompany";
import UpdateCompany from "./components/UpdateCompany";
import ViewCompany from "./components/ViewCompany";
import AddStock from "./components/AddStock";
import ViewStock from "./components/ViewStock";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={CompanyList} />
            <Route path="/add" component={AddCompany} />
            <Route path="/update/:companyCode" component={UpdateCompany} />
            <Route path="/view/:companyCode" component={ViewCompany} />
            <Route path="/addstock/:companyCode" component={AddStock} />
            <Route path="/stock/:companyCode" component={ViewStock} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

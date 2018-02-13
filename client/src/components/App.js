import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Voucher from "./voucher/Voucher";
import DetailedResult from "./detailedResult/DetailedResult";
import axios from "axios";
import Home from "./homepage/Home.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      timeOption: "",
      adviceCentres: false,
      results: null,
      lat: "",
      long: ""
    };
  }

  componentDidMount() {
    axios.get("/airtable").then(res => {
      const data = [];
      res.data.map(a => {
        data.push(a.fields);
      });
      this.setState({
        results: data
      });
    });
  }

  handleChange = event => {
    this.setState({
      postcode: event.target.value
    });
  };

  handleTime = event => {
    this.setState({
      timeOption: event.target.value
    });
  };

  toggleAdviceCentres = event => {
    this.setState({
      adviceCentres: !this.state.adviceCentres
    });
  };

  checkPostcode = e => {
    e.preventDefault();
    fetch(`https://api.postcodes.io/postcodes/${this.state.postcode}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          lat: data.result.latitude,
          long: data.result.longitude
        });
      });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div className="homepage__container">
                  <Home
                    {...props}
                    handleChange={this.handleChange}
                    handleTime={this.handleTime}
                    toggleAdviceCentres={this.toggleAdviceCentres}
                    checkPostcode={this.checkPostcode}
                    results={this.state.results}
                    lat={this.state.lat}
                    long={this.state.long}
                  />
                </div>
              )}
            />

            <Route exact path="/voucher" component={Voucher} />
            <Route
              exact
              path="/results/:name"
              render={props => (
                <div>
                  <DetailedResult {...props} results={this.state.results} />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Voucher from "./voucher/Voucher";
import DetailedResult from "./detailedResult/DetailedResult";
import axios from "axios";
import Home from "./homepage/Home.js";
import history from "../history";
import NotFound from "./error";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      timeOption: "",
      adviceCentres: false,
      results: null,
      lat: "",
      long: "",
      postcodeErrorMsg: "",
      fullScreen: false
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
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  }
  handlePostcode = event => {
    this.setState({
      postcode: event.target.value,
      postcodeErrorMsg: ""
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

  toggleMap = event => {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  };

  //if lat long is already set, don't check post code
  checkPostcode = e => {
    e.preventDefault();
    if (this.state.lat > 0 && !this.state.postcode) {
      this.setState({
        postcodeErrorMsg: "No postcode entered"
      });
    } else {
      fetch(`https://api.postcodes.io/postcodes/${this.state.postcode}`)
        .then(response => response.json())
        .then(data => {
          if (data.status > 200) {
            this.setState({
              postcodeErrorMsg: data.error
            });
          } else {
            this.setState({
              lat: data.result.latitude,
              long: data.result.longitude,
              postcodeErrorMsg: ""
            });
          }
        });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div className="homepage__container">
                  <Home
                    {...props}
                    toggleMap={this.toggleMap}
                    adviceCentres={this.state.adviceCentres}
                    fullScreen={this.state.fullScreen}
                    handlePostcode={this.handlePostcode}
                    handleTime={this.handleTime}
                    toggleAdviceCentres={this.toggleAdviceCentres}
                    postcode={this.state.postcode}
                    checkPostcode={this.checkPostcode}
                    results={this.state.results}
                    lat={this.state.lat}
                    long={this.state.long}
                    postcodeErrorMsg={this.state.postcodeErrorMsg}
                    timeOption={this.state.timeOption}
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
                  <DetailedResult
                    {...props}
                    timeOption={this.state.timeOption}
                    postcode={this.state.postcode}
                    results={this.state.results}
                    history={history}
                  />
                </div>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

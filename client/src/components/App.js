import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Voucher from "./voucher/Voucher";
import DetailedResult from "./detailedResult/DetailedResult";
import axios from "axios";
import Home from "./homepage/Home.js";
import getCoords from "../helpers/getLatLong";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      timeOption: "",
      adviceCentres: false,
      results: null
    };
  }

  componentDidMount() {
    axios.get("/airtable").then(res => {
      const data = [];
      res.data.map(a => {
        data.push(a.fields);
      });

      // const playing = [];
      // // data.map(a => {
      // //   playing.push(getCoords(a.Postcode));
      // // });
      // console.log(getCoords("SW16 6AP"));

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
    console.log(this.state.postcode);
    fetch(`https://api.postcodes.io/postcodes/${this.state.postcode}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log("error is", error));
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

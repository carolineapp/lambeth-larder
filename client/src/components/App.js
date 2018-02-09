import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SearchForm from "./search/SearchForm";
import Voucher from "./voucher/Voucher";
// import MapWindow from "../components/map/MapWindow";
import DetailedResult from "./detailedResult/DetailedResult";
import Navbar from "./Navbar";
import axios from "axios";
import Home from "./homepage/Home.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      timeOption: "",
      adviceCentres: false
    };
  }

  componentDidMount() {
    axios.get("/airtable").then(res => {
      const data = res.data;
      data.map(item => {
        const nameArr = item.fields.Name;
        console.log(nameArr);
      });
    });
  }

  handleChange = event => {
    this.setState({
      postcode: event.target.value
    });
    console.log(this.state);
  };

  handleTime = event => {
    this.setState({
      timeOption: event.target.value
    });
    console.log(this.state);
  };

  toggleAdviceCentres = event => {
    this.setState({
      adviceCentres: !this.state.adviceCentres
    });
    console.log(this.state);
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
                <div>
                  <div className="homepage__container">
                    <Home
                      {...props}
                      handleChange={this.handleChange}
                      handleTime={this.handleTime}
                      toggleAdviceCentres={this.toggleAdviceCentres}
                      checkPostcode={this.checkPostcode}
                    />
                  </div>
                </div>
              )}
            />

            <Route exact path="/voucher" component={Voucher} />
            <Route exact path="/results/:name" component={DetailedResult} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

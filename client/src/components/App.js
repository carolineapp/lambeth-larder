import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "./search/SearchForm";
import Voucher from "./Voucher";
import MapWindow from '../components/map/MapWindow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      timeOption: "",
      adviceCentres: false
    };
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
  // handleChange={this.handleChange} handleTime={this.handleTime} toggleAdviceCentres={this.toggleAdviceCentres} checkPostcode={this.checkPostcode}

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
                <MapWindow />
                <SearchForm
                  {...props}
                  handleChange={this.handleChange}
                  handleTime={this.handleTime}
                  toggleAdviceCentres={this.toggleAdviceCentres}
                  checkPostcode={this.checkPostcode}
                />
                </div>
              )}
            />

            <Route exact path="/voucher" render= {()=><Voucher />} />
            {/* <Route exact path="/voucher" component={} />
          <Route exact path="/detail" componetn={} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

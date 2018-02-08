import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "./search/SearchForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchForm} />
          {/* <Route exact path="/voucher" component={} />
          <Route exact path="/detail" componetn={} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

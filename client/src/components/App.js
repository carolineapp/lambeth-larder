import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchForm from "./search/SearchForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={SearchForm} />
          {/* <Route exact path="/voucher" component={} />
          <Route exact path="/detail" componetn={} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

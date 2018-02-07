import React, { Component } from "react";
import MapWindow from '../map/MapWindow';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      timeOption: "",
      adviceCentres: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.toggleAdviceCentres = this.toggleAdviceCentres.bind(this);
  }

  handleChange(event) {
    this.setState({
      postcode: event.target.value
    });
    console.log(this.state);
  }

  handleTime(event) {
    this.setState({
      timeOption: event.target.value
    });
    console.log(this.state);
  }

  toggleAdviceCentres(event) {
    this.setState({
      adviceCentres: !this.state.adviceCentres
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
        <MapWindow />
        </div>
      <form>
        <input
          type="text"
          name="postcode"
          placeholder="Enter your postcode"
          value={this.state.postcode}
          onChange={this.handleChange}
        />
        <p>When do you need food?</p>
        <label htmlFor="time">Today</label>
        <input
          type="radio"
          name="time"
          value="today"
          checked={this.state.timeOption === "today"}
          onChange={this.handleTime}
        />
        <label htmlFor="time">Tomorrow</label>
        <input
          type="radio"
          name="time"
          value="tomorrow"
          checked={this.state.timeOption === "tomorrow"}
          onChange={this.handleTime}
        />
        <label htmlFor="time">Later</label>
        <input
          type="radio"
          name="time"
          value="later"
          checked={this.state.timeOption === "later"}
          onChange={this.handleTime}
        />
        <br />
        <label htmlFor="advice-centres">See advice centres</label>
        <input
          type="checkbox"
          name="advice-centres"
          onChange={this.toggleAdviceCentres}
        />
      </form>
      </div>
    );
  }
}

export default SearchForm;

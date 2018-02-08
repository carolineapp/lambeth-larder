
import React, { Component } from "react";
import axios from "axios";
class SearchForm extends Component {
  constructor(props) {
    super(props);
  }
import MapWindow from '../map/MapWindow';

  componentDidMount() {
    axios.get("/airtable").then(res => {
      console.log(res);
    });
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
          value={this.props.postcode}
          onChange={this.props.handleChange}
        />
        <p>When do you need food?</p>
        <label htmlFor="time">Today</label>
        <input
          type="radio"
          name="time"
          value="today"
          onChange={this.props.handleTime}
        />
        <label htmlFor="time">Tomorrow</label>
        <input
          type="radio"
          name="time"
          value="tomorrow"
          onChange={this.props.handleTime}
        />
        <label htmlFor="time">Later</label>
        <input
          type="radio"
          name="time"
          value="later"
          onChange={this.props.handleTime}
        />
        <br />
        <label htmlFor="advice-centres">See advice centres</label>
        <input
          type="checkbox"
          name="advice-centres"
          onChange={this.props.toggleAdviceCentres}
        />
        <br />
        <button type="submit" onClick={this.props.checkPostcode}>
          Go
        </button>
      </form>
      </div>
    );
  }
}

export default SearchForm;

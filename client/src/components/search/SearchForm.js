import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("/airtable").then(res => console.log(res));
    // .then(data => console.log(data)
    // .catch(err => console.log(err))
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="postcode"
          placeholder="Enter your postcode"
          value={this.props.postcode}
          onChange={this.props.handleChange}
        />
        <p>When do you need food?</p>
        <label for="time">Today</label>
        <input
          type="radio"
          name="time"
          value="today"
          checked={this.props.timeOption === "today"}
          onChange={this.props.handleTime}
        />
        <label for="time">Tomorrow</label>
        <input
          type="radio"
          name="time"
          value="tomorrow"
          checked={this.props.timeOption === "tomorrow"}
          onChange={this.props.handleTime}
        />
        <label for="time">Later</label>
        <input
          type="radio"
          name="time"
          value="later"
          checked={this.props.timeOption === "later"}
          onChange={this.props.handleTime}
        />
        <br />
        <label for="advice-centres">See advice centres</label>
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
    );
  }
}

export default SearchForm;

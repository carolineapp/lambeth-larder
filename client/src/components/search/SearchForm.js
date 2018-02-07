import React, { Component } from "react";

const SearchForm = props => {
    return (
      <form>
        <input
          type="text"
          name="postcode"
          placeholder="Enter your postcode"
          value={props.postcode}
          onChange={props.handleChange}
        />
        <p>When do you need food?</p>
        <label for="time">Today</label>
        <input
          type="radio"
          name="time"
          value="today"
          checked={props.timeOption === "today"}
          onChange={props.handleTime}
        />
        <label for="time">Tomorrow</label>
        <input
          type="radio"
          name="time"
          value="tomorrow"
          checked={props.timeOption === "tomorrow"}
          onChange={props.handleTime}
        />
        <label for="time">Later</label>
        <input
          type="radio"
          name="time"
          value="later"
          checked={props.timeOption === "later"}
          onChange={props.handleTime}
        />
        <br />
        <label for="advice-centres">See advice centres</label>
        <input
          type="checkbox"
          name="advice-centres"
          onChange={props.toggleAdviceCentres}
        /><br />
        <button type="submit" onClick={ props.checkPostcode }>Go</button>
      </form>
    );
}

export default SearchForm;

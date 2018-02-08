import React from "react";


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
        <label htmlFor="time">Today</label>
        <input
          type="radio"
          name="time"
          value="today"
          checked={props.timeOption === "today"}
          onChange={props.handleTime}
        />
        <label htmlFor="time">Tomorrow</label>
        <input
          type="radio"
          name="time"
          value="tomorrow"
          checked={props.timeOption === "tomorrow"}
          onChange={props.handleTime}
        />
        <label htmlFor="time">Later</label>
        <input
          type="radio"
          name="time"
          value="later"
          checked={props.timeOption === "later"}
          onChange={props.handleTime}
        />
        <br />
        <label htmlFor="advice-centres">See advice centres</label>
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

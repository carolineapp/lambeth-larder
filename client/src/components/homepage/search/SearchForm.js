import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  background-color: #e71242;
  color: white;
  flex-direction: column;
`;
const RadioButtonContainer = styled.div`
  display: inherit;
  flex-direction: row;
`;
const PostcodeSearchBar = styled.input`
  display: flex;
  align-self: center;
  width: 80vw;
  height: 6vh;
  background-color: #e71242;
  font: lato;
  color: white;
  font-size: 18px;
  &::placeholder {
    color: white;
  }
`;
const Radio = styled.input`
  width: 20vw;
  height: 4vh;
  padding: 2%;
  color: white;
  background-color: #e71242;
  border: 2px solid white;
`;

const SearchForm = ({ ...props }) => {
  return (
    <FormStyle>
      <PostcodeSearchBar
        type="text"
        name="postcode"
        placeholder="Enter your postcode"
        value={props.postcode}
        onChange={props.handleChange}
      />
      <p>When do you need food?</p>
      <RadioButtonContainer>
        <label htmlFor="time">Today</label>
        <Radio
          type="radio"
          name="time"
          value="today"
          onChange={props.handleTime}
        />
        <label htmlFor="time">Tomorrow</label>
        <Radio
          type="radio"
          name="time"
          value="tomorrow"
          onChange={props.handleTime}
        />
        <label htmlFor="time">Later</label>
        <Radio
          type="radio"
          name="time"
          value="later"
          onChange={props.handleTime}
        />
      </RadioButtonContainer>
      <br />
      <label htmlFor="advice-centres">See advice centres</label>
      <input
        type="checkbox"
        name="advice-centres"
        onChange={props.toggleAdviceCentres}
      />
      <br />
      <button type="submit" onClick={props.checkPostcode}>
        Go
      </button>
    </FormStyle>
  );
};

export default SearchForm;

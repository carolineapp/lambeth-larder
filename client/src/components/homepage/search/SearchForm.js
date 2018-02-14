import React from "react";
import styled from "styled-components";
import magnifyingGlass from "../../../assets/magnifying.png";

const FormStyle = styled.form`
  display: flex;
  background-color: #e71242;
  color: white;
  flex-direction: column;
  padding: 2%;
`;
const FlexRow = styled.div`
  display: inherit;
  flex-direction: row;
  margin-top: 3vh;
  justify-content: space-around;
`;
const PostcodeSearchBar = styled.input`
  display: flex;
  align-self: center;
  padding: 1%;
  margin: 2%;
  width: 75vw;
  height: 6vh;
  background-color: #e71242;
  border: 2px solid white;
  font: lato;
  color: white;
  font-size: 18px;
  &::placeholder {
    color: white;
  }
`;
const Radio = styled.input`
  display: none;
`;
const FakeRadio = styled.label`
  display: flex;
  width: 20vw;
  height: 4vh;
  padding: 2%;
  color: white;
  background: #e71242;
  border: 2px solid white;
  &::checked {
    color: #e71242;
    background: white;
    border: 2px solid #e71242;
  }
`;
const Submit = styled.button`
  color: white;
`;

const SearchForm = ({ ...props }) => {
  return (
    <FormStyle>
      <FlexRow>
        <img src={magnifyingGlass} width={40} height={40} />
        <PostcodeSearchBar
          type="text"
          name="postcode"
          placeholder="Enter your postcode"
          value={props.postcode}
          onChange={props.handleChange}
        />
      </FlexRow>
      <Submit type="submit" onClick={props.checkPostcode}>
        Enter
      </Submit>
      <p>When do you need food?</p>
      <FlexRow>
        <FakeRadio htmlFor="today">Today</FakeRadio>
        <Radio
          id="today"
          type="radio"
          name="time"
          value="today"
          onChange={props.handleTime}
        />
        <FakeRadio htmlFor="tomorrow">Tomorrow</FakeRadio>
        <Radio
          id="tomorrow"
          type="radio"
          name="time"
          value="tomorrow"
          onChange={props.handleTime}
        />
        <FakeRadio htmlFor="later">Later</FakeRadio>
        <Radio
          id="later"
          type="radio"
          name="time"
          value="later"
          onChange={props.handleTime}
        />
      </FlexRow>
      <br />
      <label htmlFor="advice-centres">See advice centres</label>
      <input
        id="advice-centres"
        type="checkbox"
        name="advice-centres"
        onChange={props.toggleAdviceCentres}
      />
    </FormStyle>
  );
};

export default SearchForm;

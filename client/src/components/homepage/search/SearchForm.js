import React from "react";
import styled from "styled-components";
import magnifyingGlass from "../../../assets/magnifying.png";

const FormStyle = styled.form`
  display: flex;
  background-color: #e71242;
  color: white;
  flex-direction: column;
  padding: 2%;
  height: 27vh;
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
  display: flex;
  color: white;
`;
const Question = styled.p`
  padding-top: 4%;
  margin: 0;
  font-size: 14px;
`;
const LabelSmall = styled.label`
  font-size: 14px;
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
        <Submit type="submit" onClick={props.checkPostcode}>
          Enter
        </Submit>
      </FlexRow>
      {props.postcodeErrorMsg ? <p>{props.postcodeErrorMsg}</p> : ""}
      <Question>When do you need food?</Question>
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
      <FlexRow>
        <LabelSmall htmlFor="advice-centres">See advice centres</LabelSmall>
        <input
          id="advice-centres"
          type="checkbox"
          name="advice-centres"
          onChange={props.toggleAdviceCentres}
        />
      </FlexRow>
    </FormStyle>
  );
};

export default SearchForm;

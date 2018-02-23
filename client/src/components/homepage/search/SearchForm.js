import React from "react";
import styled from "styled-components";
import magnifyingGlass from "../../../assets/magnifying.png";

const FormStyle = styled.form`
  display: flex;
  background-color: #e71242;
  color: white;
  flex-direction: column;
  padding: 2%;
  max-height: 45vh;
  max-width: 500px;
  @media screen and (min-width: 600px) {
    width: 400px;
    margin-left: 10%;
    padding: 1%;
   
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const PostcodeSearchBar = styled.input`
  display: flex;
  align-self: center;
  padding: 1%;
  width: 75%;
  height: 6vh;
  background-color: #e71242;
  border: 2px solid white;
  font: lato;
  color: white;
  font-size: 1.125rem;
  &::placeholder {
    color: white;
  }
  
`;
const Radio = styled.input`
  display: none;
  text-align: center;
  
`;
const FakeRadio = styled.label`
  display: table;
  width: 20%;
  height: 4vh;
  padding: 2%;
  color: white;
  background: #e71242;
  border: 2px solid white;
  text-align: center;
  @media screen and (min-width: 600px) {
    line-height: 2rem;
  }
`;
const FakeRadioOn = styled.label`
  display: table;
  width: 20%;
  height: 4vh;
  padding: 2%;
  color: #e71242;
  background: white;
  border: 2px solid white;
  text-align: center;
  @media screen and (min-width: 600px) {
    line-height: 2rem;
  }
`;

const Submit = styled.button`
  display: flex;
  color: white;
  background-color: none;

`;
const Question = styled.p`
  padding-top: 1em;
  font-size: 1rem;
  margin: 0 auto 5% auto;
`;
const LabelSmall = styled.label`
  font-size: 1 rem;
  margin: 0 auto;
  padding-top: 1em;
`;
const Padding = styled.div`
  padding-top: 2em;
  height: 2em;
  margin-left: 5%;
`;

const CheckBox = styled.input`
  color: #e71242;
  border: 2px solid white;
  width: 2rem;
`;

//Makes space for error message so that things don't overlap

const ErrMessage = styled.div`
  padding: 2%;
`;

const SearchForm = props => {
  return (
    <FormStyle>
      {props.postcodeErrorMsg ? (
        <ErrMessage>{props.postcodeErrorMsg}</ErrMessage>
      ) : (
        <ErrMessage />
      )}
      <FlexRow className="flexrow">
        <PostcodeSearchBar
          type="text"
          name="postcode"
          placeholder="Enter your postcode"
          value={props.postcode}
          onChange={props.handleChange}
        />
        <Submit type="submit" onClick={props.checkPostcode}>
          <img
            src={magnifyingGlass}
            width={40}
            height={40}
            vertical-align="center"
          />
        </Submit>
      </FlexRow>
      <Question>When do you need food? </Question>
      <FlexRow>
        {props.timeOption == "today" ? (
          <FakeRadioOn htmlFor="today">Today</FakeRadioOn>
        ) : (
          <FakeRadio htmlFor="today">Today</FakeRadio>
        )}
        <Radio
          id="today"
          type="radio"
          name="time"
          value="today"
          onChange={props.handleTime}
        />
        {props.timeOption == "tomorrow" ? (
          <FakeRadioOn htmlFor="tomorrow">Tomorrow</FakeRadioOn>
        ) : (
          <FakeRadio htmlFor="tomorrow">Tomorrow</FakeRadio>
        )}
        <Radio
          id="tomorrow"
          type="radio"
          name="time"
          value="tomorrow"
          onChange={props.handleTime}
        />
        {props.timeOption == "later" ? (
          <FakeRadioOn htmlFor="later">Later</FakeRadioOn>
        ) : (
          <FakeRadio htmlFor="later">Later</FakeRadio>
        )}
        <Radio
          id="later"
          type="radio"
          name="time"
          value="later"
          onChange={props.handleTime}
        />
      </FlexRow>
      <Padding>
        <LabelSmall htmlFor="advice-centres">See other support</LabelSmall>
        <CheckBox
          id="advice-centres"
          type="checkbox"
          name="advice-centres"
          onChange={props.toggleAdviceCentres}
        />
      </Padding>
    </FormStyle>
  );
};

export default SearchForm;

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
  width: 20vw;
  height: 4vh;
  border-radius: none;
`;
const FakeRadio = styled.label`
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
      <Question>When do you need food?</Question>
      <FlexRow>
        <FakeRadio htmlFor="time">Today</FakeRadio>
        <Radio
          type="radio"
          name="time"
          value="today"
          onChange={props.handleTime}
        />
        <FakeRadio htmlFor="time">Tomorrow</FakeRadio>
        <Radio
          type="radio"
          name="time"
          value="tomorrow"
          onChange={props.handleTime}
        />
        <FakeRadio htmlFor="time">Later</FakeRadio>
        <Radio
          type="radio"
          name="time"
          value="later"
          onChange={props.handleTime}
        />
      </FlexRow>
      <FlexRow>
        <LabelSmall htmlFor="advice-centres">See advice centres</LabelSmall>
        <input
          type="checkbox"
          name="advice-centres"
          onChange={props.toggleAdviceCentres}
        />
      </FlexRow>
    </FormStyle>
  );
};

export default SearchForm;

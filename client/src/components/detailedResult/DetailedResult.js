import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Div = styled.div`
  height: 100vh;
  background: #e71242;
`;

const Wrapper = styled.section`
  height: 85%;
  width: 90%;
  background: white;
  margin: auto;
`;

const Header = styled.h1`
  color: rgb(24, 23, 24);
  text-align: center;
  padding-top: 10%;
`;

const TextWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 5%;
`;

const Button = styled.button`
  width: 20%;
  padding: 2%;
  margin-top: 15%;
  margin-left: 5%;
  color: #e71242;
  background: white;
  border: 2px solid #e71242;
`;

const DetailedResult = ({ match }) => {
  //get details from airtable using match.params.name
  //populate the div below with the results
  return (
    <Div className="detailedResult__container">
      <Navbar />
      <Wrapper>
        <Header>{match.params.name}</Header>
        <p>Info about detailed result</p>
      </Wrapper>
    </Div>
  );
};

export default DetailedResult;

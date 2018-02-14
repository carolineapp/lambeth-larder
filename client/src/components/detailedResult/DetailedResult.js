import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Address from "./Address";
import Description from "./Description";
import Contact from "./Contact";
import Hours from "./Hours";

const Div = styled.div`
  min-height: 100vh;
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

const DetailedResult = ({ match, results }) => {
  return (
    <Div className="detailedResult__container">
      <Navbar />
      <Wrapper>
        <Header>{match.params.name}</Header>
        <Address results={results} name={match.params.name} />
        <Description results={results} name={match.params.name} />
        <Contact results={results} name={match.params.name} />
        <Hours results={results} name={match.params.name} />
        <a href="/">
          <Button>Back</Button>
        </a>
      </Wrapper>
    </Div>
  );
};

export default DetailedResult;

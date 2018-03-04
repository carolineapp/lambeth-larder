import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import jug from "../../assets/jug.png";
import banner from "../../assets/EmergencyFood_temp_sml.jpg";

const Wrapper = styled.section`
  min-height: 85vh;
  background: white;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
  @media screen and (min-width: 600px) {
    width: 70%;
    margin: 5% auto;
    border: 5px solid #e71242;
    padding: 4%;
    font-size: 1.125rem;
    min-height: 50vh;
  }
`;
const Div = styled.div`
  height: 100%;
  background: #e71242;
  @media screen and (min-width: 600px) {
    background-color: white;
  }
`;

const Header = styled.h1`
  color: rgb(24, 23, 24);
  text-align: center;
  padding-top: 10%;
  font-family: lato;
  @media screen and (min-width: 600px) {
    padding: 2%;
    font-size: 1.875rem;
  }
`;

const TextWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 5%;
`;

const Button = styled.button`
  min-width: 20%;
  padding: 2%;
  margin-top: 15%;
  margin-left: 5%;
  margin-bottom: 5%;
  color: #e71242;
  background: white;
  border: 2px solid #e71242;
  @media screen and (min-width: 600px) {
    min-width: 5%;
    margin-left: 1%;
    margin-bottom: 3%;
    margin-top: 1%;
    padding: 1%;
  }
`;

const Banner = styled.img`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Voucher = props => {
  return (
    <Div>
      <Navbar />
      <Banner src={banner} width={"100%"} />
      <Wrapper className="voucher__container">
        <Header>How Food Banks Work</Header>
        <TextWrapper>
          <img src={jug} height={80} width={80} alt={"icon of a jug"} />
          <div>
            <p>
              1. If you need to use a food bank, a health visitor, social
              worker, advice worker, police, etc. must refer you.
            </p>
            <p>
              2. Once you have been referred, you will receive a food bank
              voucher.
            </p>
            <p>
              3. Take your completed voucher to the food bank to receive food.
            </p>
            <p>
              4. You can contact your nearest food bank to find local voucher
              holders.
            </p>
          </div>
        </TextWrapper>
        <a href="/">
          <Button>Back</Button>
        </a>
      </Wrapper>
    </Div>
  );
};

export default Voucher;

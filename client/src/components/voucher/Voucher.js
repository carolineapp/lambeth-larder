import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";


const Wrapper = styled.section`
  height: 100vh;
  background: #e71242;
  ${"" /* padding: 0;
  margin: 0; */};
`;

const Nav = styled.nav`
  height: 10%;
  width: 100%;
`;

const WrapperContainer = styled.section`
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

const Img = styled.img`
  width: 300px;
  height: auto;
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

const Voucher = props => {
  return (
    <Div className="voucher__body">
      <Navbar />
      <Wrapper className="voucher__container">
        <Header>How Food Banks Work</Header>
        <TextWrapper>
          <Img alt="" src="../../../assets/jug.png" />
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
        {/* link to home page */}
        <a href="/">
          <Button>Back</Button>
        </a>
      </Wrapper>
    </Div>
  );
};

export default Voucher;

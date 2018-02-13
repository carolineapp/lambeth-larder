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
  padding: 5%;
`;

const Voucher = props => {
  return (
    <Wrapper className="voucher__body">
      <Nav>
        <Navbar />
      </Nav>
      <WrapperContainer className="voucher__container">
        <Header>How Food Banks Work</Header>
        <TextWrapper>
          <p>
            1. If you need to use a food bank, a health visitor, social worker,
            advice worker, police, etc. must refer you.
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
        </TextWrapper>
      </WrapperContainer>
    </Wrapper>
  );
};

export default Voucher;

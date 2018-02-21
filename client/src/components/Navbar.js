import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
margin-top: 4%;
margin-left: 5%;
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        {/* replace this with icon? */}
        <a href="http://www.lambethlarder.org">HOME</a>
      </Nav>
    </div>
  );
};

export default Navbar;

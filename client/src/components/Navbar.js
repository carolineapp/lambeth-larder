import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
padding-top: 4%;
margin-left: 5%;
@media screen and (min-width: 600px) {
  height:5vh;
  background-color: qhite;
  margin: 0;
  padding-top: 1%;
  padding-left: 3%;

}
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        {/* replace this with icon? */}
        <a href="http://www.lambethlarder.org">LAMBETH LARDER</a>
      </Nav>
    </div>
  );
};

export default Navbar;

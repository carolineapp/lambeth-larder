import React from "react";
import styled from "styled-components";

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const Nav = styled.nav`
  height: 10%;
  width: 100%;
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <a href="">
              <li>MONEY SAVING IDEAS AND BUDGET RECIPES</li>
            </a>
            <a href="">
              <li>LOCAL AND EMERGENCY FOOD</li>
            </a>
            <a href="">
              <li>USEFUL INFORMATION</li>
            </a>
            <a href="">
              <li>WELBEING</li>
            </a>
            <a href="">
              <li>FOOD GROWING</li>
            </a>
            <a href="">
              <li>HEALTHY HOLIDAYS</li>
            </a>
            <a href="">
              <li>BLOG</li>
            </a>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;

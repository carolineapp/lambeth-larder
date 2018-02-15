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
          
          <ul id="menu" style={{width:"230px"}}>
            <a href="http://www.lambethlarder.org/money-saving-ideas--budget-recipes.html">
              <li>MONEY SAVING IDEAS AND BUDGET RECIPES</li>
            </a>
            <a href="http://www.lambethlarder.org/local--emergency-food.html">
              <li>LOCAL AND EMERGENCY FOOD</li>
            </a>
            <a href="http://www.lambethlarder.org/useful-information.html">
              <li>USEFUL INFORMATION</li>
            </a>
            <a href="http://www.lambethlarder.org/useful-information.html">
              <li>WELBEING</li>
            </a>
            <a href="http://www.lambethlarder.org/food-growing.html">
              <li>FOOD GROWING</li>
            </a>
            <a href="http://www.lambethlarder.org/healthy-holidays.html">
              <li>HEALTHY HOLIDAYS</li>
            </a>
            <a href="http://www.lambethlarder.org/blog">
              <li>BLOG</li>
            </a>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;

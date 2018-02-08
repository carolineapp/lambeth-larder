import React from "react";

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
const Navbar = () => {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
};

export default Navbar;

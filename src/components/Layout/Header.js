import React from "react";

const Header = () => {
  return (
    <div class="header">
      <div class="main-header">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand white-text" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link white-text" href="#">
                    Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link white-text" href="#">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="second-header">
        <div class="pl-5 pr-5">
          <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <a class="nav-link white-text" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white-text" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white-text" href="#">
                  Gallary
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white-text" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link white-text" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

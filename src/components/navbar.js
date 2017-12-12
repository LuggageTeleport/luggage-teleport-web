import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar def_nav11 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://www.luggageteleport.com">
            <img
              src="https://www.luggageteleport.com/wp-content/themes/luggage/images/logo.png"
              alt
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{ width: 800 }}>
              <li
                id="menu-item-5"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-4 current_page_item menu-item-5"
              >
                <a href="https://www.luggageteleport.com/">Home</a>
              </li>
              <li
                id="menu-item-8"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8"
              >
                <a href="https://www.luggageteleport.com/about-us/">About Us</a>
              </li>
              <li
                id="menu-item-11"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11"
              >
                <a href="https://www.luggageteleport.com/our-services/">
                  Our Services
                </a>
              </li>
              <li
                id="menu-item-14"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
              >
                <a href="https://www.luggageteleport.com/careers-partnerships/">
                  Careers & Partnerships
                </a>
              </li>
              <li
                id="menu-item-17"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
              >
                <a href="https://www.luggageteleport.com/contact-us/">
                  Contact Us
                </a>
              </li>


              <li
                id="menu-item-20"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"
              >
                <Link to="/">
                  <a>
                    Logout
                </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

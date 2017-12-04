import React from "react";
import Navbar from "./navbar";
import HeaderContent from "./header_content";

class Header extends React.Component {
  render() {
    return (
      <header
        className="Home112"
        style={{
          background:
            "url(https://www.luggageteleport.com/wp-content/uploads/2017/09/homebg.png) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <Navbar />
        <HeaderContent />
      </header>
    );
  }
}

export default Header;

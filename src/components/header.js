import React from "react";
import Navbar from "./navbar";
import HeaderContent from "./header_content";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    // console.log('this.props header', this.props)
    return (
      <header
        className="Home112"
        style={{
          background:
            "url(https://www.luggageteleport.com/wp-content/uploads/2017/09/homebg.png) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: '100%',
          height: '900px'
        }}
      >
        <Navbar/>
        <HeaderContent />
      </header>
    );
  }
}

export default Header;

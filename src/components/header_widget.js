import React from "react";
import DesktopVisible from "./desktop_visible";

class HeaderWidget extends React.Component {
  render() {
    return (
      <div className="textwidget">
        <div className="row">
          <DesktopVisible />
          <div className="col-lg-8 text-center">
            <h1>What would you do if your day</h1>
            <h1>had an Additional Hour?</h1>
            <div
              style={{
                height: 10,
                clear: "both"
              }}
            />
            Luggage Teleport provides on-demand luggage delivery service
            <div>
              so you can enjoy a hassle-free, time-saving travel experience.
            </div>
            <div
              style={{
                height: 30,
                clear: "both"
              }}
            />
            <div>
              <a href="#">
                <img
                  src="http://luggageteleport.com/wp-content/uploads/2017/09/playstore.png"
                  alt
                />
              </a>
              <a href="#">
                <img
                  src="http://luggageteleport.com/wp-content/uploads/2017/09/appstore.png"
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderWidget;

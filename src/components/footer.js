import React from "react";
import AppIcons from "./app_icons";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="textwidget">
                  <h4>About us</h4>
                  <p>
                    Luggage Teleport Inc. is an on-demand luggage transportation
                    service that was founded in Palo Alto, CA in 2017.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="textwidget">
                  <h4>Our Services</h4>
                  <p>
                    We deliver luggage for travelers from Airport to Hotel,
                    Hotel to Airport and Hotel to Hotel, so they can have a
                    hassle-free and time-saving travel experience.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-5">
                <div className="textwidget">
                  <h4>Quick Links</h4>
                  <a href="/careers-partnerships">Careers & Partnerships</a>
                  <a href="/faq">FAQ</a>
                  <a href="/cities">Cities</a>
                  <a href="http://luggageteleport.com/wp-content/uploads/2017/10/Terms-Of-Service.pdf">
                    Terms of Service
                  </a>
                  <a href="http://luggageteleport.com/wp-content/uploads/2017/10/Privacy-Policy.pdf">
                    Privacy
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="textwidget">
                  <h4>Contact Info</h4>
                  <a href="tel:+14159966182">+1 415-996-6182</a>
                  <a href="mailto:contact@luggageteleport.com">
                    contact@luggageteleport.com
                  </a>
                  <AppIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          © 2017 Luggage Teleport INC All Rights Reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;

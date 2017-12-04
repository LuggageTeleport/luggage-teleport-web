import React from "react";

class SectionTwo extends React.Component {
  render() {
    return (
      <article className="default-padd left_block112 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 flex-l-center order-lg-6">
              <div>
                <p>
                  Take the most out of your business and leisure travels with
                  the confidence that your luggage is well taken care of.
                </p>
                <p>
                  Jump right into new adventures immediately after landing at
                  the airport or enjoy the remaining free time between hotel
                  check-out and your late flight.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img
                className="img-fluid"
                src="http://luggageteleport.com/wp-content/uploads/2017/09/right.png"
                alt
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default SectionTwo;

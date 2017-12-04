import React from "react";

class SectionOne extends React.Component {
  render() {
    return (
      <article className="default-padd left_block112">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 flex-l-center">
              <div>
                <h2>From Airport to Hotel</h2>
                <p>
                  <i>
                    From October to December we will only be scheduling
                    deliveries every 4 hours.
                  </i>
                </p>
                <p>
                  <span className="mb-lg-5">(Launching October 15th 2017)</span>
                </p>
                <h2>From Hotel to Airport</h2>
                <p>
                  <span className="mb-lg-5">(Launching November 1st 2017)</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="http://luggageteleport.com/wp-content/uploads/2017/09/left.png"
                alt
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default SectionOne;

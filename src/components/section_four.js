import React from "react";

class SectionFour extends React.Component {
  render() {
    return (
      <article className="default-padd why-choose-us">
        <div className="container">
          <h2 className="text-center section-h">Why Choose Us</h2>
          <div className="row">
            <div className="col-lg-6 p-lg-0">
              <div className="choose-box bg-black">
                <div className="text-holder">
                  <p>
                    Traveling can now be hassle-free and you can maximize the
                    time on your trips.
                  </p>
                </div>
                <div className="img-holder">
                  <img
                    className="img-fluid"
                    src="http://luggageteleport.com/wp-content/uploads/2017/09/choose-1.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-lg-0">
              <div className="choose-box">
                <div className="img-holder">
                  <img
                    className="img-fluid"
                    src="http://luggageteleport.com/wp-content/uploads/2017/09/choose-2.png"
                    alt
                  />
                </div>
                <div className="text-holder bg-white">
                  <p>
                    Our Teleporters are trained to handle your luggage with
                    care.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-lg-0">
              <div className="choose-box ">
                <div className="text-holder bg-white">
                  <p>
                    Our luggage locks enhance security and our tags allow you to
                    track the delivery status at all times.
                  </p>
                </div>
                <div className="img-holder ">
                  <img
                    className="img-fluid"
                    src="http://luggageteleport.com/wp-content/uploads/2017/09/choose-3.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-lg-0">
              <div className="choose-box bg-black">
                <div className="img-holder">
                  <img
                    className="img-fluid"
                    src="http://luggageteleport.com/wp-content/uploads/2017/09/choose-4.png"
                    alt
                  />
                </div>
                <div className="text-holder">
                  <p>
                    All this convenience is completely budget-friendly:
                    <br />
                    <span
                      style={{
                        fontFamily: "arial"
                      }}
                    >
                      $30
                    </span>{" "}
                    per delivery (up to 2 bags.{" "}
                    <span
                      style={{
                        fontFamily: "arial"
                      }}
                    >
                      $10
                    </span>{" "}
                    per additional piece.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default SectionFour;

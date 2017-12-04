import React from "react";
import VideoSection from "./video_section";

class SectionThree extends React.Component {
  render() {
    return (
      <article className=" default-padd Intro_videos">
        <div className="container">
          <h2 className="text-center section-h">What We Do</h2>
          <VideoSection />
          <h2 className="text-center section-h">How It Works</h2>
          <div className="infography text-center">
            <img
              className="img-fluid desktop-visible"
              src="http://luggageteleport.com/wp-content/uploads/2017/10/web-info.png"
              alt
            />{" "}
            <img
              className="img-fluid mobile-visible"
              src="http://luggageteleport.com/wp-content/uploads/2017/10/mobile-info.png"
              alt
            />
          </div>
        </div>
      </article>
    );
  }
}

export default SectionThree;

import React from "react";

class VideoSection extends React.Component {
  render() {
    return (
      <div className="video_holder">
        <iframe
          src="https://www.youtube.com/embed/jQ7wd4r6R48"
          width={560}
          height={315}
          frameBorder={0}
          allowFullScreen="allowfullscreen"
        />
      </div>
    );
  }
}

export default VideoSection;

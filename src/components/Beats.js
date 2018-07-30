import React, { Component } from "react";
import ReactPlayer from "react-player";

class Beats extends Component {
  render() {
    return (
      <div class="react-player">
        <h4>Beat Selection</h4>
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/nTOpemD2QTA?t=21"
          width="100%"
          height="50%"
          playing="false"
        />
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/ailpxhP3UYw?t=9"
          width="100%"
          height="50%"
          playing="false"
        />
      </div>
    );
  }
}

export default Beats;

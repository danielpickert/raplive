import React, { Component } from "react";
import ReactPlayer from "react-player";

class Beats extends Component {
  render() {
    return (
      <div class="Beats">
        <h4>Beat Selection</h4>
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/nTOpemD2QTA?t=21"
          width="50%"
          height="50%"
          playing
        />
      </div>
    );
  }
}

export default Beats;

import React, { useEffect, useState } from "react";
// import { Player } from "video-react";
import sound from "../Assets/sound.png";
import soundoff from "../Assets/soundoff.png";
<link href="https://vjs.zencdn.net/8.10.0/video-js.css" rel="stylesheet" />;
const Video = () => {
  const [data, setData] = useState("sound");



  return (
    <>
      <video
        className="ml-10 mt-4 rounded-lg"
        id="myvideo"
        controls="controls"
        autoPlay="autoPlay"
        loop="loop"
        width="720"
        height="300"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
        <source src="MY_VIDEO.webm" type="video/webm" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
      <button
        onClick={() => {
          setData(!data);
        }}
        className="relative left-96 ml-80 rounded-full w-8 h-8 -top-20  -mt-52 bg-black m-2 p-1"
      >
        <img src={data ? soundoff : sound} alt="" />
      </button>
    </>
  );
};
export default Video;

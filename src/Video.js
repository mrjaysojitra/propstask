import React, { useRef } from "react";
import Audio2 from "./Audioa/chilled-acoustic-indie-folk-ig-version-60s-9648.mp3"
import "./Audio.css"


export const Video = () => {
  const myButton = useRef();
  const myAudio = useRef();

  const myData = () => {
    if (!myButton.current.classList.add("slide")) {
        myButton.current.classList.add("slide");
        myAudio.current.play();
      
    } else {
      myButton.current.classList.remove("slide");
      myAudio.current.pause();
    }
  };
  return (
    <header>
      <audio ref={myAudio}>
        <source src={Audio2} type="audio/mp3" />
      </audio>


      <h1>Audio Project</h1>

      <button class="switch-btn" ref={myButton} onClick={myData}>
        <span>
        play
        </span>

        <span>
        pause
        </span>

        <span class="switch"></span>
      </button>
    </header>
  );
};

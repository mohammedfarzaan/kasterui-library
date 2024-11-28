import React from "react";
import styles from "./Input_shape.module.css";

const Input_shape = () => (
  <div>
    <div className={styles["audio"] + styles["green-audio-player"]}>
      <div className={styles["play-pause-btn"]}>
        <svg
          viewBox="0 0 18 24"
          height="24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="playPause"
            className="play-pause-icon"
            d="M18 12L0 24V0"
            fillRule="evenodd"
            fill="#566574"
          ></path>
        </svg>
      </div>

      <div className={styles["controls"]}>
        <span className={styles["current-time"]}>0:00</span>
        <div data-direction="horizontal" className={styles["slider"]}>
          <div className={styles["progress"]}>
            <div
              data-method="rewind"
              id="progress-pin"
              className={styles["pin"]}
            ></div>
          </div>
        </div>
        <span className={styles["total-time"]}>0:00</span>
      </div>

      <div className={styles["volume"]}>
        <div className={styles["volume-btn"]}>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="speaker"
              d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
              fillRule="evenodd"
              fill="#566574"
            ></path>
          </svg>
        </div>
        <div className={styles["volume-controls"] + styles["hidden"]}>
          <div data-direction="vertical" className={styles["slider"]}>
            <div className={styles["progress"]}>
              <div
                data-method="changeVolume"
                id="volume-pin"
                className={styles["pin"]}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <audio crossorigin=""></audio>
    </div>
  </div>
);

export default Input_shape;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_shape = () => (
         <div>
          <div className="audio green-audio-player">
  <div className="play-pause-btn">
    <svg viewBox="0 0 18 24" height="24" width="18" xmlns="http://www.w3.org/2000/svg">
      <path id="playPause" className="play-pause-icon" d="M18 12L0 24V0" fillRule="evenodd" fill="#566574"></path>
    </svg>
  </div>

  <div className="controls">
    <span className="current-time">0:00</span>
    <div data-direction="horizontal" className="slider">
      <div className="progress">
        <div data-method="rewind" id="progress-pin" className="pin"></div>
      </div>
    </div>
    <span className="total-time">0:00</span>
  </div>

  <div className="volume">
    <div className="volume-btn">
      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path id="speaker" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" fillRule="evenodd" fill="#566574"></path>
      </svg>
    </div>
    <div className="volume-controls hidden">
      <div data-direction="vertical" className="slider">
        <div className="progress">
          <div data-method="changeVolume" id="volume-pin" className="pin"></div>
        </div>
      </div>
    </div>
  </div>

  <audio crossorigin=""></audio>
</div>
        </div>
        );

        export default Input_shape;
        
        
         */
}

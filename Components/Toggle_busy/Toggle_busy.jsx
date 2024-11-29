import React from "react";
import styles from "./Toggle_busy.module.css";

const Toggle_busy = () => (
  <div>
    <label
      type="checkbox"
      className={
        styles["reduceMotionToggle"] + styles["st-reduceMotionToggleBtn"]
      }
      for="reduceMotionToggle"
    >
      <input
        className={styles["reduceMotionToggleInput"]}
        id="reduceMotionToggle"
        type="checkbox"
      />
      <svg
        strokeWidth="0"
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 18 18"
        height="18"
        width="18"
      >
        <mask id="lineMask">
          <rect fill="white" height="18" width="18"></rect>
          <rect
            fill="black"
            style={{ rotate: "30deg" }}
            height="16"
            width="4.1"
            y="-5"
            x="9.807"
            className={styles["line"]}
          ></rect>
        </mask>
        <rect
          style={{ rotate: "30deg" }}
          height="13"
          width="1.3"
          y="-3.3"
          x="11.3"
          className={styles["line"]}
        ></rect>
        <g mask="url(#lineMask)">
          <circle
            style={{
              "--_toCenterXOffset": "5.76px",
              "--_appearOffset": "-.1s",
            }}
            fill="none"
            strokeWidth=".1"
            r="2.95"
            cy="9"
            cx="3.24"
            className={styles["ballTrace"]}
          ></circle>
          <circle
            style={{ "--_toCenterXOffset": "3px", "--_appearOffset": ".02s" }}
            fill="none"
            strokeWidth=".2"
            r="2.9"
            cy="9"
            cx="6"
            className={styles["ballTrace"]}
          ></circle>
          <circle
            style={{ "--_toCenterXOffset": "0px", "--_appearOffset": ".07s" }}
            fill="none"
            strokeWidth=".3"
            r="2.8"
            cy="9"
            cx="9"
            className={styles["ballTrace"]}
          ></circle>
          <circle
            style={{
              "--_toCenterXOffset": "-2.75px",
              "--_appearOffset": ".13s",
            }}
            fill="none"
            strokeWidth=".4"
            r="2.75"
            cy="9"
            cx="11.75"
            className={styles["ballTrace"]}
          ></circle>
          <circle
            style={{ "--_toCenterXOffset": "-5.7px" }}
            r="3"
            cy="9"
            cx="14.7"
            className={styles["ball"]}
          ></circle>
        </g>
      </svg>
    </label>
  </div>
);

export default Toggle_busy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_busy = () => (
         <div>
          <label
  type="checkbox"
  className="reduceMotionToggle st-reduceMotionToggleBtn"
  for="reduceMotionToggle"
>
  <input
    className="reduceMotionToggleInput"
    id="reduceMotionToggle"
    type="checkbox"
  />
  <svg
    strokeWidth="0"
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 18 18"
    height="18"
    width="18"
  >
    <mask id="lineMask">
      <rect fill="white" height="18" width="18"></rect>
      <rect
        fill="black"
        style={{rotate:"30deg"}}
        height="16"
        width="4.1"
        y="-5"
        x="9.807"
        className="line"
      ></rect>
    </mask>
    <rect
      style={{rotate:"30deg"}}
      height="13"
      width="1.3"
      y="-3.3"
      x="11.3"
      className="line"
    ></rect>
    <g mask="url(#lineMask)">
      <circle
        style={{'--_toCenterXOffset':"5.76px",'--_appearOffset':"-.1s"}}
        fill="none"
        strokeWidth=".1"
        r="2.95"
        cy="9"
        cx="3.24"
        className="ballTrace"
      ></circle>
      <circle
        style={{'--_toCenterXOffset':"3px",'--_appearOffset':".02s"}}
        fill="none"
        strokeWidth=".2"
        r="2.9"
        cy="9"
        cx="6"
        className="ballTrace"
      ></circle>
      <circle
        style={{'--_toCenterXOffset':"0px",'--_appearOffset':".07s"}}
        fill="none"
        strokeWidth=".3"
        r="2.8"
        cy="9"
        cx="9"
        className="ballTrace"
      ></circle>
      <circle
        style={{'--_toCenterXOffset':"-2.75px",'--_appearOffset':".13s"}}
        fill="none"
        strokeWidth=".4"
        r="2.75"
        cy="9"
        cx="11.75"
        className="ballTrace"
      ></circle>
      <circle
        style={{'--_toCenterXOffset':"-5.7px"}}
        r="3"
        cy="9"
        cx="14.7"
        className="ball"
      ></circle>
    </g>
  </svg>
</label>
        </div>
        );

        export default Toggle_busy;
        
        
         */
}

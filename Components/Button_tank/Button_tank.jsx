import React from "react";
import styles from "./Button_tank.module.css";

const Button_tank = () => (
  <div>
    <div className={styles["chat"]}>
      <div className={styles["background"]}></div>
      <svg
        viewBox="0 0 100 100"
        height="100"
        width="100"
        className="chat-bubble"
      >
        <g className="bubble">
          <path
            d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961
          36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
          69.29995,40.103201 69.29995,46.784744"
            className="line line1"
          ></path>
          <path
            d="M 13.461999,65.039335 H 58.028684 C
            63.483128,65.039335
            69.243089,59.000293 69.243089,54.928561 V 45.605853 C
            69.243089,40.986964 65.02087,35.419884 58.339327,35.419884"
            className="line line2"
          ></path>
        </g>
        <circle cx="42.5" cy="50.7" r="1.9" className="circle circle1"></circle>
        <circle r="1.9" cy="50.7" cx="49.9" className="circle circle2"></circle>
        <circle cx="57.3" cy="50.7" r="1.9" className="circle circle3"></circle>
      </svg>
    </div>
  </div>
);

export default Button_tank;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tank = () => (
         <div>
          <div className="chat">
      <div className="background"></div>
      <svg viewBox="0 0 100 100" height="100" width="100" className="chat-bubble">
        <g className="bubble">
          <path d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961
          36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
          69.29995,40.103201 69.29995,46.784744" className="line line1"></path>
          <path d="M 13.461999,65.039335 H 58.028684 C
            63.483128,65.039335
            69.243089,59.000293 69.243089,54.928561 V 45.605853 C
            69.243089,40.986964 65.02087,35.419884 58.339327,35.419884" className="line line2"></path>
        </g>
        <circle cx="42.5" cy="50.7" r="1.9" className="circle circle1"></circle>
        <circle r="1.9" cy="50.7" cx="49.9" className="circle circle2"></circle>
        <circle cx="57.3" cy="50.7" r="1.9" className="circle circle3"></circle>
      </svg>
    </div>
        </div>
        );

        export default Button_tank;
        
        
         */
}

import React from "react";
import styles from "./Button_lost.module.css";

const Button_lost = () => (
  <div>
    <button className={styles["styled-button"]}>
      Register Now
      <div className={styles["inner-button"]}>
        <svg
          id="Arrow"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          width="30px"
          className="icon"
        >
          <defs>
            <linearGradient
              y2="100%"
              x2="100%"
              y1="0%"
              x1="0%"
              id="iconGradient"
            >
              <stop
                style="stop-color:#FFFFFF;stop-opacity:1"
                offset="0%"
              ></stop>
              <stop
                style="stop-color:#AAAAAA;stop-opacity:1"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#iconGradient)"
            d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
          ></path>
        </svg>
      </div>
    </button>
  </div>
);

export default Button_lost;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lost = () => (
         <div>
          <button className="styled-button">
  Register Now
  <div className="inner-button">
    <svg
      id="Arrow"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      width="30px"
      className="icon"
    >
      <defs>
        <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
          <stop style="stop-color:#FFFFFF;stop-opacity:1" offset="0%"></stop>
          <stop style="stop-color:#AAAAAA;stop-opacity:1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#iconGradient)"
        d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
      ></path>
    </svg>
  </div>
</button>
        </div>
        );

        export default Button_lost;
        
        
         */
}

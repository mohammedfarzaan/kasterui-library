import React from "react";
import styles from "./Button_when.module.css";

const Button_when = () => (
  <div>
    <a
      className={styles["schedule-button"]}
      href="https://www.linkedin.com/in/nkhlrjrs/"
    >
      Schedule a Call
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </a>
  </div>
);

export default Button_when;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_when = () => (
         <div>
          <a className="schedule-button" href="https://www.linkedin.com/in/nkhlrjrs/">
   Schedule a Call
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
    </svg>
 
  </a>
        </div>
        );

        export default Button_when;
        
        
         */
}

import React from "react";
import styles from "./Button_differ.module.css";

const Button_differ = () => (
  <div>
    <a
      className={styles["schedule-button"]}
      href="https://www.linkedin.com/in/nkhlrjrs/"
    >
      Schedule a Call
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["arrow"]}
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </a>
  </div>
);

export default Button_differ;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_differ = () => (
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

        export default Button_differ;
        
        
         */
}

import React from "react";
import styles from "./Button_lunch.module.css";

const Button_lunch = () => (
  <div>
    <button className={styles["space-button"]}>
      <svg className="space-icon" viewBox="0 0 24 24" width="16" height="16">
        <path
          fill="currentColor"
          d="M12 0c-1.2 0-2.2 1-2.2 2.2v3.3c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1V2.2C7.6 1 6.7 0 5.5 0S3.4 1 3.4 2.2v3.3c0 .6-.5 1.1-1.1 1.1S1.1 6.1 1.1 5.5V2.2C1.1 1 0 2 0 3.2 0 16.3 7.7 24 20.8 24 23 24 24 23 24 20.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-1.2-1-2.2-2.2-2.2z"
        ></path>
      </svg>
      Launch
    </button>
  </div>
);

export default Button_lunch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lunch = () => (
         <div>
          <button className="space-button">
  <svg className="space-icon" viewBox="0 0 24 24" width="16" height="16">
    <path fill="currentColor" d="M12 0c-1.2 0-2.2 1-2.2 2.2v3.3c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1V2.2C7.6 1 6.7 0 5.5 0S3.4 1 3.4 2.2v3.3c0 .6-.5 1.1-1.1 1.1S1.1 6.1 1.1 5.5V2.2C1.1 1 0 2 0 3.2 0 16.3 7.7 24 20.8 24 23 24 24 23 24 20.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-1.2-1-2.2-2.2-2.2z"></path>
  </svg>
  Launch
</button>
        </div>
        );

        export default Button_lunch;
        
        
         */
}

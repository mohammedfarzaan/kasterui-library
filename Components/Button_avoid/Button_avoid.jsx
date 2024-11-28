import React from "react";
import styles from "./Button_avoid.module.css";

const Button_avoid = () => (
  <div>
    <button className={styles["button"]}>
      <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          fill="transparent"
          strokeWidth="30"
          stroke="black"
          d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
        ></path>
      </svg>
      &nbsp;Send Message
    </button>
  </div>
);

export default Button_avoid;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_avoid = () => (
         <div>
          <button className="button">
  <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      fill="transparent"
      strokeWidth="30"
      stroke="black"
      d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
    ></path>
  </svg>
  &nbsp;Send Message
</button>
        </div>
        );

        export default Button_avoid;
        
        
         */
}

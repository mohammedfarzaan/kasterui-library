import React from "react";
import styles from "./Button_hat.module.css";

const Button_hat = () => (
  <div>
    <button className={styles["btn"]}>
      <div>GET STARTED</div>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        height="25px"
        width="25px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke="white"
          d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke="white"
          d="M4 12.0601H14.17"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="2"
          stroke="white"
          d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_hat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hat = () => (
         <div>
          <button className="btn">
  <div>GET STARTED</div>
  <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
<path strokeLinejoin="round" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
<path strokeLinejoin="round" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2" stroke="white" d="M4 12.0601H14.17"></path>
<path strokeLinejoin="round" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
</svg>
</button>
        </div>
        );

        export default Button_hat;
        
        
         */
}

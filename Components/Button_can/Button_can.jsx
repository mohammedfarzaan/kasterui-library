import React from "react";
import styles from "./Button_can.module.css";

const Button_can = () => (
  <div>
    <button className={styles["btn"]}>
      <svg
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="40"
      >
        <path
          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_can;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_can = () => (
         <div>
          <button className="btn">
  <svg className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="40" width="40">
  <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
</button>
        </div>
        );

        export default Button_can;
        
        
         */
}

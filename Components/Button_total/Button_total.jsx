import React from "react";
import styles from "./Button_total.module.css";

const Button_total = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="svg-icon"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#a649da" strokeLinecap="round" strokeWidth="2">
          <path d="m20 20h-16"></path>
          <path
            clipRule="evenodd"
            d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Edit</span>
    </button>
  </div>
);

export default Button_total;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_total = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#a649da" strokeLinecap="round" strokeWidth="2"><path d="m20 20h-16"></path><path clipRule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fillRule="evenodd"></path></g></svg>
  <span className="lable">Edit</span>
</button>
        </div>
        );

        export default Button_total;
        
        
         */
}

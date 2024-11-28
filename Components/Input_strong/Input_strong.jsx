import React from "react";
import styles from "./Input_strong.module.css";

const Input_strong = () => (
  <div>
    <div className={styles["input-div"]}>
      <input className={styles["input"]} name="file" type="file" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        strokeLinejoin="round"
        strokeLinecap="round"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        stroke="currentColor"
        className="icon"
      >
        <polyline points="16 16 12 12 8 16"></polyline>
        <line y2="21" x2="12" y1="12" x1="12"></line>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
        <polyline points="16 16 12 12 8 16"></polyline>
      </svg>
    </div>
  </div>
);

export default Input_strong;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_strong = () => (
         <div>
          <div className="input-div">
  <input className="input" name="file" type="file" />
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
</div>
        </div>
        );

        export default Input_strong;
        
        
         */
}

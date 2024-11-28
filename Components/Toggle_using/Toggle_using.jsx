import React from "react";
import styles from "./Toggle_using.module.css";

const Toggle_using = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}>
        <svg
          className="slider-icon"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <path fill="none" d="m4 16.5 8 8 16-16"></path>
        </svg>
      </span>
    </label>
  </div>
);

export default Toggle_using;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_using = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider">
   <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
  </span>
</label>
        </div>
        );

        export default Toggle_using;
        
        
         */
}

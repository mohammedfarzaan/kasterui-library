import React from "react";
import styles from "./Button_flies.module.css";

const Button_flies = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="0 0 20 20"
        height="20"
        fill="none"
        className={styles["svg-icon"]}
      >
        <g strokeWidth="1.5" strokeLinecap="round" stroke="#de8a2a">
          <circle r="7.5" cy="10" cx="10"></circle>
          <path d="m9.99998 7.5v5"></path>
          <path d="m7.5 9.99998h5"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Add</span>
    </button>
  </div>
);

export default Button_flies;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_flies = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20" fill="none" className="svg-icon"><g strokeWidth="1.5" strokeLinecap="round" stroke="#de8a2a"><circle r="7.5" cy="10" cx="10"></circle><path d="m9.99998 7.5v5"></path><path d="m7.5 9.99998h5"></path></g></svg>
  <span className="lable">Add</span>
</button>
        </div>
        );

        export default Button_flies;
        
        
         */
}

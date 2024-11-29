import React from "react";
import styles from "./Button_arrow.module.css";

const Button_arrow = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className={styles["svg-icon"]}
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#ff2849" strokeLinecap="round" strokeWidth="2">
          <rect height="14" rx="1.5" width="3" x="15" y="5"></rect>
          <rect height="14" rx="1.5" width="3" x="6" y="5"></rect>
        </g>
      </svg>
      <span className={styles["label"]}>Pause</span>
    </button>
  </div>
);

export default Button_arrow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_arrow = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff2849" strokeLinecap="round" strokeWidth="2"><rect height="14" rx="1.5" width="3" x="15" y="5"></rect><rect height="14" rx="1.5" width="3" x="6" y="5"></rect></g></svg>
  <span className="label">Pause</span>
</button>
        </div>
        );

        export default Button_arrow;
        
        
         */
}

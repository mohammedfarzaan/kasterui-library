import React from "react";
import styles from "./Button_swim.module.css";

const Button_swim = () => (
  <div>
    <button className={styles["space-button"]}>
      <span className={styles["space-button-text"]}>Explore Space</span>
      <svg
        className={styles["space-button-icon"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 0C8.411 0 5.418 2.993 5.418 6.582c0 3.153 2.443 5.792 5.595 6.473v2.526c0 .748.603 1.352 1.352 1.352s1.352-.604 1.352-1.352V13.05c3.152-.68 5.595-3.32 5.595-6.473C18.582 2.993 15.589 0 12 0zm0 9.288a3.706 3.706 0 1 1 0-7.412 3.706 3.706 0 0 1 0 7.412zM7.292 6.582c0-2.129 1.733-3.862 3.862-3.862s3.862 1.733 3.862 3.862c0 2.129-1.733 3.862-3.862 3.862s-3.862-1.733-3.862-3.862z"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_swim;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_swim = () => (
         <div>
          <button className="space-button">
  <span className="space-button-text">Explore Space</span>
  <svg className="space-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 0C8.411 0 5.418 2.993 5.418 6.582c0 3.153 2.443 5.792 5.595 6.473v2.526c0 .748.603 1.352 1.352 1.352s1.352-.604 1.352-1.352V13.05c3.152-.68 5.595-3.32 5.595-6.473C18.582 2.993 15.589 0 12 0zm0 9.288a3.706 3.706 0 1 1 0-7.412 3.706 3.706 0 0 1 0 7.412zM7.292 6.582c0-2.129 1.733-3.862 3.862-3.862s3.862 1.733 3.862 3.862c0 2.129-1.733 3.862-3.862 3.862s-3.862-1.733-3.862-3.862z"></path>
  </svg>
</button>
        </div>
        );

        export default Button_swim;
        
        
         */
}

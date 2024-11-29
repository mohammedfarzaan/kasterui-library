import React from "react";
import styles from "./Button_affect.module.css";

const Button_affect = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-overlay"]}></div>
      <span>
        Button{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 53 58"
          height="58"
          width="53"
        >
          <path
            strokeWidth="9"
            stroke="currentColor"
            d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_affect;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_affect = () => (
         <div>
          <button className="button">
  <div className="button-overlay"></div>
  <span>Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 53 58" height="58" width="53">
<path strokeWidth="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
</svg></span>
  
</button>
        </div>
        );

        export default Button_affect;
        
        
         */
}

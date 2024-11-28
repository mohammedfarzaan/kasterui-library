import React from "react";
import styles from "./Button_mice.module.css";

const Button_mice = () => (
  <div>
    <button className={styles["btn-class-name"]}>
      <span>Next</span>
      <svg
        viewBox="0 0 320 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
      </svg>
    </button>
  </div>
);

export default Button_mice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mice = () => (
         <div>
          <button className="btn-class-name">
  <span>Next</span>
  <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
  </path>
  </svg>
</button>
        </div>
        );

        export default Button_mice;
        
        
         */
}

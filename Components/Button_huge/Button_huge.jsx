import React from "react";
import styles from "./Button_huge.module.css";

const Button_huge = () => (
  <div>
    <button className={styles["button"]}>
      <svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
      </svg>
      Unlock Pro
    </button>
  </div>
);

export default Button_huge;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_huge = () => (
         <div>
          <button className="button">
    <svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
    </svg>
    Unlock Pro
</button>
        </div>
        );

        export default Button_huge;
        
        
         */
}

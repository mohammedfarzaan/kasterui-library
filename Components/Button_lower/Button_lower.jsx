import React from "react";
import styles from "./Button_lower.module.css";

const Button_lower = () => (
  <div>
    <button>
      <span className={styles["txt"]}>submit</span>
      <span className={styles["txt2"]}>sent!</span>
      <span className={styles["loader-container"]}>
        <span className={styles["loader"]}></span>
      </span>
    </button>
  </div>
);

export default Button_lower;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lower = () => (
         <div>
          <button>
  <span className="txt">submit</span>
  <span className="txt2">sent!</span>
  <span className="loader-container">
    <span className="loader"></span>
  </span>
</button>
        </div>
        );

        export default Button_lower;
        
        
         */
}

import React from "react";
import styles from "./Button_funny.module.css";

const Button_funny = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["text"]}>Play</span>
    </button>
  </div>
);

export default Button_funny;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_funny = () => (
         <div>
          <button className="btn">
  <span className="text">Play</span>
</button>
        </div>
        );

        export default Button_funny;
        
        
         */
}

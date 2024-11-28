import React from "react";
import styles from "./Button_nearer.module.css";

const Button_nearer = () => (
  <div>
    <div className={styles["button"]}>
      <span className={styles["text"]}>hover me</span>
      <span className={styles["arrow"]}></span>
    </div>
  </div>
);

export default Button_nearer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nearer = () => (
         <div>
          <div className="button">
  <span className="text">hover me</span>
  <span className="arrow"></span>
</div>
        </div>
        );

        export default Button_nearer;
        
        
         */
}

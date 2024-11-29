import React from "react";
import styles from "./Button_pride.module.css";

const Button_pride = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["btn-text-one"]}>Hover me</span>
      <span className={styles["btn-text-two"]}>Great!</span>
    </button>
  </div>
);

export default Button_pride;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pride = () => (
         <div>
          <button className="btn">
    <span className="btn-text-one">Hover me</span>
    <span className="btn-text-two">Great!</span>
</button>
        </div>
        );

        export default Button_pride;
        
        
         */
}

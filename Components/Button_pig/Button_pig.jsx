import React from "react";
import styles from "./Button_pig.module.css";

const Button_pig = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-text"]}>Hover me</span>
      <div className={styles["fill-container"]}></div>
    </button>
  </div>
);

export default Button_pig;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pig = () => (
         <div>
          <button className="button">
  <span className="button-text">Hover me</span>
  <div className="fill-container"></div>
</button>
        </div>
        );

        export default Button_pig;
        
        
         */
}

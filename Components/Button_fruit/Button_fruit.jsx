import React from "react";
import styles from "./Button_fruit.module.css";

const Button_fruit = () => (
  <div>
    <button className={styles["button"]}>
      <span>Button</span>
      <div className={styles["overlay"]}></div>
      <div className={styles["shine"]}></div>
    </button>
  </div>
);

export default Button_fruit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fruit = () => (
         <div>
          <button className="button">
  <span>Button</span>
  <div className="overlay"></div>
  <div className="shine"></div>
</button>
        </div>
        );

        export default Button_fruit;
        
        
         */
}

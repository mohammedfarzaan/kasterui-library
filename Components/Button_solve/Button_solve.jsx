import React from "react";
import styles from "./Button_solve.module.css";

const Button_solve = () => (
  <div>
    <button className={styles["setting-btn"]}>
      <span className={styles["bar"] + styles["bar1"]}></span>
      <span className={styles["bar"] + styles["bar2"]}></span>
      <span className={styles["bar"] + styles["bar1"]}></span>
    </button>
  </div>
);

export default Button_solve;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_solve = () => (
         <div>
          <button className="setting-btn">
  <span className="bar bar1"></span>
  <span className="bar bar2"></span>
  <span className="bar bar1"></span>
</button>
        </div>
        );

        export default Button_solve;
        
        
         */
}

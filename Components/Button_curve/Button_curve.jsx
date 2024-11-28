import React from "react";
import styles from "./Button_curve.module.css";

const Button_curve = () => (
  <div>
    <button className={styles["container"]}>
      <span className={styles["effect"] + styles["orange_effect"]}></span>
      <span className={styles["effect"] + styles["white_effect"]}></span>
      <div className={styles["heart"] + styles["heart_left"]}></div>
      <div className={styles["heart"] + styles["heart_right"]}></div>
      <div className={styles["like"]}>I love it</div>
    </button>
  </div>
);

export default Button_curve;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_curve = () => (
         <div>
          <button className="container">
  <span className="effect orange_effect"></span>
  <span className="effect white_effect"></span>
  <div className="heart heart_left"></div>
  <div className="heart heart_right"></div>
  <div className="like">I love it</div>
</button>
        </div>
        );

        export default Button_curve;
        
        
         */
}

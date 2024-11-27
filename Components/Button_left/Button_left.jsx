import React from "react";
import styles from "./Button_left.module.css";

const Button_left = () => (
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

export default Button_left;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_left = () => (
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

        export default Button_left;
        
        
         */
}

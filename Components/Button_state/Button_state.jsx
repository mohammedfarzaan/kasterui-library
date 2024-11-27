import React from "react";
import styles from "./Button_state.module.css";

const Button_state = () => (
  <div>
    <button className={styles["btn-76"]}>
      Button
      <span className={styles["top"]}></span>
      <span className={styles["right"]}></span>
      <span className={styles["bottom"]}></span>
      <span className={styles["left"]}></span>
    </button>
  </div>
);

export default Button_state;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_state = () => (
         <div>
          <button className="btn-76">
  Button
  <span className="top"></span>
  <span className="right"></span>
  <span className="bottom"></span>
  <span className="left"></span>
</button>
        </div>
        );

        export default Button_state;
        
        
         */
}

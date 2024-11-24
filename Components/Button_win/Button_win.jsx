import React from "react";
import styles from "./Button_win.module.css";

const Button_win = () => (
  <div>
    <button className={styles["border-el-btn"]}>
      Button
      <span className={styles["b1"]}></span>
      <span className={styles["b2"]}></span>
      <span className={styles["b3"]}></span>
      <span className={styles["b4"]}></span>
    </button>
  </div>
);

export default Button_win;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_win = () => (
         <div>
          <button className="border-el-btn">
  Button
  <span className="b1"></span>
  <span className="b2"></span>
  <span className="b3"></span>
  <span className="b4"></span>
</button>
        </div>
        );

        export default Button_win;
        
        
         */
}

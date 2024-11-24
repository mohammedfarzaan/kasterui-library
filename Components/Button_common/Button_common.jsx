import React from "react";
import styles from "./Button_common.module.css";

const Button_common = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["left-span"]}></span>
      <p className={styles["text-btn"]}>Hover me</p>
      <p className={styles["hidden-text-btn"]}>Thank you!</p>
      <span className={styles["right-span"]}></span>
    </button>
  </div>
);

export default Button_common;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_common = () => (
         <div>
          <button className="btn">
  <span className="left-span"></span>
  <p className="text-btn">Hover me</p>
  <p className="hidden-text-btn">Thank you!</p>
  <span className="right-span"></span>
</button>
        </div>
        );

        export default Button_common;
        
        
         */
}

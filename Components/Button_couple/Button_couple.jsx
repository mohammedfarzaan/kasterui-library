import React from "react";
import styles from "./Button_couple.module.css";

const Button_couple = () => (
  <div>
    <button className={styles["c-button"]}>
      <span className={styles["c-main"]}>
        <span className={styles["c-ico"]}>
          <span className={styles["c-blur"]}></span>{" "}
          <span className={styles["ico-text"]}>+</span>
        </span>
        button
      </span>
    </button>
  </div>
);

export default Button_couple;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_couple = () => (
         <div>
          <button className="c-button">
  <span className="c-main">
    <span className="c-ico"><span className="c-blur"></span> <span className="ico-text">+</span></span>
    button
  </span>
</button>
        </div>
        );

        export default Button_couple;
        
        
         */
}

import React from "react";
import styles from "./Button_brief.module.css";

const Button_brief = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["b-hover"]}>
        <div className={styles["cir-1"] + styles["filter"]}></div>
        <div className={styles["cir-2"] + styles["filter"]}></div>
        <div className={styles["cir-3"] + styles["filter"]}></div>
        <div className={styles["cir-4"] + styles["filter"]}></div>
        <div className={styles["cir-5"] + styles["filter"]}></div>
        <div className={styles["cir-6"] + styles["filter"]}></div>
      </div>
      Charge &amp; Go
    </button>
  </div>
);

export default Button_brief;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_brief = () => (
         <div>
          <button className="button">
  <div className="b-hover">
    <div className="cir-1 filter"></div>
    <div className="cir-2 filter"></div>
    <div className="cir-3 filter"></div>
    <div className="cir-4 filter"></div>
    <div className="cir-5 filter"></div>
    <div className="cir-6 filter"></div>
  </div>
  Charge &amp; Go
</button>
        </div>
        );

        export default Button_brief;
        
        
         */
}

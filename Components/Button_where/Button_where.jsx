import React from "react";
import styles from "./Button_where.module.css";

const Button_where = () => (
  <div>
    <div className={styles["box"]}>
      <button className={styles["button"]}>SNOW</button>
      <div className={styles["snowfall"]}>
        <span style="--i: 12" className={styles["snowflake"]}></span>
        <span style="--i: 31" className={styles["snowflake"]}></span>
        <span style="--i: 18" className={styles["snowflake"]}></span>
        <span style="--i: 9" className={styles["snowflake"]}></span>
        <span style="--i: 41" className={styles["snowflake"]}></span>
        <span style="--i: 22" className={styles["snowflake"]}></span>
        <span style="--i: 16" className={styles["snowflake"]}></span>
        <span style="--i: 35" className={styles["snowflake"]}></span>
        <span style="--i: 9" className={styles["snowflake"]}></span>
        <span style="--i: 14" className={styles["snowflake"]}></span>
        <span style="--i: 19" className={styles["snowflake"]}></span>
        <span style="--i: 6" className={styles["snowflake"]}></span>
        <span style="--i: 53" className={styles["snowflake"]}></span>
        <span style="--i: 26" className={styles["snowflake"]}></span>
        <span style="--i: 34" className={styles["snowflake"]}></span>
        <span style="--i: 18" className={styles["snowflake"]}></span>
        <span style="--i: 8" className={styles["snowflake"]}></span>
      </div>
    </div>
  </div>
);

export default Button_where;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_where = () => (
         <div>
          <div className="box">
  <button className="button">SNOW</button>
  <div className="snowfall">
    <span style="--i: 12" className="snowflake"></span>
    <span style="--i: 31" className="snowflake"></span>
    <span style="--i: 18" className="snowflake"></span>
    <span style="--i: 9" className="snowflake"></span>
    <span style="--i: 41" className="snowflake"></span>
    <span style="--i: 22" className="snowflake"></span>
    <span style="--i: 16" className="snowflake"></span>
    <span style="--i: 35" className="snowflake"></span>
    <span style="--i: 9" className="snowflake"></span>
    <span style="--i: 14" className="snowflake"></span>
    <span style="--i: 19" className="snowflake"></span>
    <span style="--i: 6" className="snowflake"></span>
    <span style="--i: 53" className="snowflake"></span>
    <span style="--i: 26" className="snowflake"></span>
    <span style="--i: 34" className="snowflake"></span>
    <span style="--i: 18" className="snowflake"></span>
    <span style="--i: 8" className="snowflake"></span>
  </div>
</div>
        </div>
        );

        export default Button_where;
        
        
         */
}

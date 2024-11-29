import React from "react";
import styles from "./Card_wall.module.css";

const Card_wall = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["top"]}>
        <div className={styles["metal"]}></div>
        <div className={styles["plastic"]}></div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["line1"]}></div>
        <div className={styles["yellow"]}></div>
      </div>
      <div className={styles["minicuadro1"]}></div>
      <div className={styles["minicuadro2"]}></div>
      <div className={styles["line1"]}></div>
      <div className={styles["line2"]}></div>
      <div className={styles["line3"]}></div>
      <div className={styles["line4"]}></div>
      <div className={styles["line5"]}></div>
      <p className={styles["index"]}>Index</p>
    </div>
  </div>
);

export default Card_wall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_wall = () => (
         <div>
          <div className="card">
  <div className="top">
    <div className="metal"></div>
    <div className="plastic"></div>
  </div>
  <div className="bottom">
    <div className="line1"></div>
    <div className="yellow"></div>
  </div>
  <div className="minicuadro1"></div>
  <div className="minicuadro2"></div>
  <div className="line1"></div>
  <div className="line2"></div>
  <div className="line3"></div>
  <div className="line4"></div>
  <div className="line5"></div>
  <p className="index">Index</p>
</div>
        </div>
        );

        export default Card_wall;
        
        
         */
}

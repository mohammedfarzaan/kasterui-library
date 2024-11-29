import React from "react";
import styles from "./Card_secret.module.css";

const Card_secret = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["container"]}>
        <div className={styles["cloud"] + styles["front"]}>
          <span className={styles["left-front"]}></span>
          <span className={styles["right-front"]}></span>
        </div>
        <span className={styles["sun"] + styles["sunshine"]}></span>
        <span className={styles["sun"]}></span>
        <div className={styles["cloud"] + styles["back"]}>
          <span className={styles["left-back"]}></span>
          <span className={styles["right-back"]}></span>
        </div>
      </div>

      <div className={styles["card-header"]}>
        <span>
          Messadine, Susah
          <br />
          Tunisia
        </span>
        <span>March 13</span>
      </div>

      <span className={styles["temp"]}>23°</span>

      <div className={styles["temp-scale"]}>
        <span>Celcius</span>
      </div>
    </div>
  </div>
);

export default Card_secret;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_secret = () => (
         <div>
          <div className="card">
  <div className="container">
    <div className="cloud front">
      <span className="left-front"></span>
      <span className="right-front"></span>
    </div>
    <span className="sun sunshine"></span>
    <span className="sun"></span>
    <div className="cloud back">
      <span className="left-back"></span>
      <span className="right-back"></span>
    </div>
  </div>

  <div className="card-header">
    <span>Messadine, Susah<br />Tunisia</span>
    <span>March 13</span>
  </div>

  <span className="temp">23°</span>

  <div className="temp-scale">
    <span>Celcius</span>
  </div>
</div>
        </div>
        );

        export default Card_secret;
        
        
         */
}

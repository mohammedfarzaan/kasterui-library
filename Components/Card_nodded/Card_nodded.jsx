import React from "react";
import styles from "./Card_nodded.module.css";

const Card_nodded = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["twitter"]}>
        <div className={styles["wing-bottom"]}></div>
        <div className={styles["wing-top"]}></div>
        <div className={styles["wing-middle"]}></div>
        <div className={styles["beak"] + styles["beak-bottom"]}></div>
        <div className={styles["beak"] + styles["beak-top"]}></div>
        <div className={styles["torso"]}></div>
        <div className={styles["tummy"]}></div>
        <div className={styles["tail"]}></div>
        <div className={styles["head"]}></div>
      </div>
    </div>
  </div>
);

export default Card_nodded;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_nodded = () => (
         <div>
          <div className="container">
  <div className="twitter">
    <div className="wing-bottom"></div>
    <div className="wing-top"></div>
    <div className="wing-middle"></div>
    <div className="beak beak-bottom"></div>
    <div className="beak beak-top"></div>
    <div className="torso"></div>
    <div className="tummy"></div>
    <div className="tail"></div>
    <div className="head"></div>
  </div>
</div>
        </div>
        );

        export default Card_nodded;
        
        
         */
}

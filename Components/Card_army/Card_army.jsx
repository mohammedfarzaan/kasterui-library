import React from "react";
import styles from "./Card_army.module.css";

const Card_army = () => (
  <div>
    <div className={styles["cube-container"]}>
      <div className={styles["cube"]}>
        <div className={styles["face"] + styles["front"]}>Front</div>
        <div className={styles["face"] + styles["back"]}>Back</div>
        <div className={styles["face"] + styles["right"]}>Right</div>
        <div className={styles["face"] + styles["left"]}>Left</div>
        <div className={styles["face"] + styles["top"]}>Top</div>
        <div className={styles["face"] + styles["bottom"]}>Bottom</div>
      </div>
    </div>
  </div>
);

export default Card_army;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_army = () => (
         <div>
          <div className="cube-container">
  <div className="cube">
    <div className="face front">Front</div>
    <div className="face back">Back</div>
    <div className="face right">Right</div>
    <div className="face left">Left</div>
    <div className="face top">Top</div>
    <div className="face bottom">Bottom</div>
  </div>
</div>
        </div>
        );

        export default Card_army;
        
        
         */
}

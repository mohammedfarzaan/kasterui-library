import React from "react";
import styles from "./Card_shape.module.css";

const Card_shape = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-1"]}></div>
      <div className={styles["right"]}>
        <div className={styles["card-2"]}></div>
        <div className={styles["card-3"]}></div>
        <div className={styles["card-3"]}></div>
        <div className={styles["card-3"]}></div>
        <div className={styles["card-3"]}></div>
        <div className={styles["bottom"]}>
          <div className={styles["card-4"]}></div>
          <div className={styles["card-4"]}></div>
          <div className={styles["card-4"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_shape;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_shape = () => (
         <div>
          <div className="card">
    <div className="card-1">
    </div>
    <div className="right">
            <div className="card-2">
            </div>
            <div className="card-3">
            </div>
            <div className="card-3">
            </div>
            <div className="card-3">
            </div>
            <div className="card-3">
        </div>
        <div className="bottom">
            <div className="card-4">
            </div>
            <div className="card-4">
            </div>
            <div className="card-4">
            </div>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_shape;
        
        
         */
}

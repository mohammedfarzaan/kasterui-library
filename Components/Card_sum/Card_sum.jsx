import React from "react";
import styles from "./Card_sum.module.css";

const Card_sum = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["item"]}>SCROLL SNAP</div>
      <div className={styles["item"]}>SCROLL SNAP</div>
      <div className={styles["item"]}>SCROLL SNAP</div>
      <div className={styles["item"]}>SCROLL SNAP</div>
      <div className={styles["item"]}>SCROLL SNAP</div>
    </div>
  </div>
);

export default Card_sum;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sum = () => (
         <div>
          <div className="container">
    <div className="item">SCROLL SNAP</div>
    <div className="item">SCROLL SNAP</div>
    <div className="item">SCROLL SNAP</div>
    <div className="item">SCROLL SNAP</div>
    <div className="item">SCROLL SNAP</div>
</div>
        </div>
        );

        export default Card_sum;
        
        
         */
}

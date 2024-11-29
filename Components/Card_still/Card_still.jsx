import React from "react";
import styles from "./Card_still.module.css";

const Card_still = () => (
  <div>
    <div className={styles["cards"]}>
      <div className={styles["card"] + styles["one"]}>
        <div className={styles["cardDetails"]}>
          <div className={styles["cardDetailsHaeder"]}>Card Header</div>
          <div className={styles["cardDetailsButton"]}>Click me</div>
        </div>
      </div>
      <div className={styles["card"] + styles["two"]}>
        <div className={styles["cardDetails"]}>
          <div className={styles["cardDetailsHaeder"]}>Card Header</div>
          <div className={styles["cardDetailsButton"]}>Click me</div>
        </div>
      </div>
      <div className={styles["card"] + styles["three"]}>
        <div className={styles["cardDetails"]}>
          <div className={styles["cardDetailsHaeder"]}>Card Header</div>
          <div className={styles["cardDetailsButton"]}>Click me</div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_still;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_still = () => (
         <div>
          <div className="cards">
  <div className="card one">
    <div className="cardDetails">
      <div className="cardDetailsHaeder">Card Header</div>
      <div className="cardDetailsButton">Click me</div>
    </div>
  </div>
  <div className="card two">
    <div className="cardDetails">
      <div className="cardDetailsHaeder">Card Header</div>
      <div className="cardDetailsButton">Click me</div>
    </div>
  </div>
  <div className="card three">
    <div className="cardDetails">
      <div className="cardDetailsHaeder">Card Header</div>
      <div className="cardDetailsButton">Click me</div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_still;
        
        
         */
}

import React from "react";
import styles from "./Card_rear.module.css";

const Card_rear = () => (
  <div>
    <div className={styles["card"]}>
      <span className={styles["title"]}>
        Pro
        <p className={styles["pricing"]}>
          $8 <span className={styles["pricing-time"]}>/ month</span>
        </p>
        <span className={styles["sub-title"]}>
          Everything on Basic plus:
          <ul className={styles["list"]}>
            <li className={styles["list-item"]}>
              <span className={styles["check"]}>✓</span> Feature
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["check"]}>✓</span> Feature
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["check"]}>✓</span> Feature
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["check"]}>✓</span> Feature
            </li>
            <li className={styles["list-item"]}>
              <span className={styles["check"]}>✓</span> Feature
            </li>
          </ul>
          <button className={styles["button"]}>
            <span className={styles["text-button"]}>Get pro now</span>
          </button>
        </span>
      </span>
    </div>
  </div>
);

export default Card_rear;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_rear = () => (
         <div>
          <div className="card">
  <span className="title"
    >Pro
    <p className="pricing">$8 <span className="pricing-time">/ month</span></p>
    <span className="sub-title"
      >Everything on Basic plus:
      <ul className="list">
        <li className="list-item"><span className="check">✓</span> Feature</li>
        <li className="list-item"><span className="check">✓</span> Feature</li>
        <li className="list-item"><span className="check">✓</span> Feature</li>
        <li className="list-item"><span className="check">✓</span> Feature</li>
        <li className="list-item"><span className="check">✓</span> Feature</li>
      </ul>
      <button className="button">
        <span className="text-button">Get pro now</span>
      </button>
    </span></span
  >
</div>
        </div>
        );

        export default Card_rear;
        
        
         */
}

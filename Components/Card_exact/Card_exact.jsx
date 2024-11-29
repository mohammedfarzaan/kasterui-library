import React from "react";
import styles from "./Card_exact.module.css";

const Card_exact = () => (
  <div>
    <div className={styles["container"]}>
      <p className={styles["title"]}>GPT Plus</p>
      <p className={styles["price"]}>
        $20<span>/month</span>
      </p>
      <p className={styles["description"]}>
        Access to GPT-4, our most capable model. Faster response speed.
      </p>
      <b className={styles["offer"]}>
        Act fast! Offer ends on October 25, 2023.
      </b>
      <a className={styles["subscribe-button"]} href="#">
        Upgrade
      </a>
      <div className={styles["ribbon-wrap"]}>
        <div className={styles["ribbon"]}>Special Offer!</div>
      </div>
    </div>
  </div>
);

export default Card_exact;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_exact = () => (
         <div>
          <div className="container">
  <p className="title">GPT Plus</p>
  <p className="price">$20<span>/month</span></p>
  <p className="description">Access to GPT-4, our most capable model. Faster response speed.</p>
  <b className="offer">Act fast! Offer ends on October 25, 2023.</b>
  <a className="subscribe-button" href="#">Upgrade</a>
  <div className="ribbon-wrap">
    <div className="ribbon">Special Offer!</div>
  </div>
</div>
        </div>
        );

        export default Card_exact;
        
        
         */
}

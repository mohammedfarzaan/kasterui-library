import React from "react";
import styles from "./Card_tail.module.css";

const Card_tail = () => (
  <div>
    <div className={styles["card"]}>
      <span className={styles["card__title"]}>Subscribe to Premium</span>
      <p className={styles["card__text"]}>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button className={styles["card__button"]}>Subscribe</button>
    </div>
  </div>
);

export default Card_tail;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_tail = () => (
         <div>
          <div className="card">
  <span className="card__title">Subscribe to Premium</span>
  <p className="card__text">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
  <button className="card__button">Subscribe</button>
</div>
        </div>
        );

        export default Card_tail;
        
        
         */
}

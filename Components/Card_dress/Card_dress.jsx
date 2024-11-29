import React from "react";
import styles from "./Card_dress.module.css";

const Card_dress = () => (
  <div>
    <div className={styles["cards__inner"]}>
      <div className={styles["cards__card"] + styles["card"]}>
        <p className={styles["card__heading"]}>Free Plan</p>
        <p className={styles["card__price"]}>$0/month</p>
        <ul className={styles["card_bullets"] + styles["flow"]} role="list">
          <li>Access to all features</li>
          <li>Unlimited storage</li>
          <li>No ads</li>
        </ul>
        <a className={styles["card__cta"] + styles["cta"]} href="#basic">
          Get Started
        </a>
      </div>
      <div className={styles["overlay"] + styles["cards__inner"]}></div>
    </div>
  </div>
);

export default Card_dress;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_dress = () => (
         <div>
          <div className="cards__inner">
  <div className="cards__card card">
    <p className="card__heading">Free Plan</p>
    <p className="card__price">$0/month</p>
    <ul className="card_bullets flow" role="list">
      <li>Access to all features</li>
      <li>Unlimited storage</li>
      <li>No ads</li>
    </ul>
    <a className="card__cta cta" href="#basic">Get Started</a>
  </div>
  <div className="overlay cards__inner"></div>
</div>
        </div>
        );

        export default Card_dress;
        
        
         */
}

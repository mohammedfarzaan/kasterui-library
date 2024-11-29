import React from "react";
import styles from "./Card_flat.module.css";

const Card_flat = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["banner"]}>
        <span className={styles["banner-text"]}>SUBSCRIBE</span>
        <span className={styles["banner-text"]}>JOIN US</span>
      </div>
      <span className={styles["card__title"]}>Nihilism</span>
      <p className={styles["card__subtitle"]}>
        Get fresh void to your inbox every week.
      </p>
      <form className={styles["card__form"]}>
        <input placeholder="Your Email" type="email" required="" />
        <button className={styles["sign-up"]}>Sign up</button>
      </form>
    </div>
  </div>
);

export default Card_flat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_flat = () => (
         <div>
          <div className="card">
  <div className="banner">
    <span className="banner-text">SUBSCRIBE</span>
    <span className="banner-text">JOIN US</span>
  </div>
  <span className="card__title">Nihilism</span>
  <p className="card__subtitle">Get fresh void to your inbox every week.</p>
  <form className="card__form">
    <input placeholder="Your Email" type="email" required="" />
    <button className="sign-up">Sign up</button>
  </form>
</div>
        </div>
        );

        export default Card_flat;
        
        
         */
}

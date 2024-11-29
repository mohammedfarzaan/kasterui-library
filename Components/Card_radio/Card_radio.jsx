import React from "react";
import styles from "./Card_radio.module.css";

const Card_radio = () => (
  <div>
    <div className={styles["card"]}>
      <span className={styles["card__title"]}>Newsletter</span>
      <p className={styles["card__content"]}>
        Get existential crisis delivered straight to your inbox every week.
      </p>
      <form className={styles["card__form"]}>
        <input required="" type="email" placeholder="Your life" />
        <button className={styles["card__button"]}>Click me</button>
      </form>
    </div>
  </div>
);

export default Card_radio;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_radio = () => (
         <div>
          <div className="card">
  <span className="card__title">Newsletter</span>
  <p className="card__content">
    Get existential crisis delivered straight to your inbox every week.
  </p>
  <form className="card__form">
    <input required="" type="email" placeholder="Your life" />
    <button className="card__button">Click me</button>
  </form>
</div>
        </div>
        );

        export default Card_radio;
        
        
         */
}

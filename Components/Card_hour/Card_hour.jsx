import React from "react";
import styles from "./Card_hour.module.css";

const Card_hour = () => (
  <div>
    <div className={styles["cookie-card"]}>
      <span className={styles["cookie-title"]}>🍪 COOKIES</span>
      <p className={styles["cookie-description"]}>
        We ensure to provide you with the best experiences while using our
        website.
        <a className={styles["cookies-policy"]} href="#">
          Please review our cookies policy
        </a>
        .
      </p>
      <button className={styles["accept-button"]}>Accept</button>
    </div>
  </div>
);

export default Card_hour;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hour = () => (
         <div>
          <div className="cookie-card">
  <span className="cookie-title">🍪 COOKIES</span>
  <p className="cookie-description">We ensure to provide you with the 
    best experiences while using our website. 
    <a className="cookies-policy" href="#">Please review our cookies policy</a>.</p>
    <button className="accept-button">Accept</button>
</div>
        </div>
        );

        export default Card_hour;
        
        
         */
}

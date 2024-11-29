import React from "react";
import styles from "./Card_warn.module.css";

const Card_warn = () => (
  <div>
    <div className={styles["cookie-warning"]}>
      <span className={styles["cookie-warning__title"]}>We use cookies 🍪</span>
      <div className={styles["cookie-warning__text"]}>
        This site uses cookies to enhance your experience. Give 'em a go! Or
        don't! It's up to you! <a href="#">Read more about our cookies</a>
      </div>
      <div className={styles["cookie-warning__button-group"]}>
        <button className={styles["cookie-warning__button"]}>Accept</button>
        <button className={styles["cookie-warning__button"]}>Decline</button>
      </div>
    </div>
  </div>
);

export default Card_warn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_warn = () => (
         <div>
          <div className="cookie-warning">
  <span className="cookie-warning__title">We use cookies 🍪</span>
    <div className="cookie-warning__text">This site uses cookies to enhance your experience. Give 'em a go! Or don't! It's up to you! <a href="#">Read more about our cookies</a></div>
    <div className="cookie-warning__button-group">
      <button className="cookie-warning__button">Accept</button>
      <button className="cookie-warning__button">Decline</button>
    </div>
</div>
        </div>
        );

        export default Card_warn;
        
        
         */
}

import React from "react";
import styles from "./Card_about.module.css";

const Card_about = () => (
  <div>
    <div className={styles["cookie-card"]}>
      <span className={styles["title"]}>🍪 Cookie Notice</span>
      <p className={styles["description"]}>
        We use cookies to ensure that we give you the best experience on our
        website. <a href="#">Read cookies policies</a>.{" "}
      </p>
      <div className={styles["actions"]}>
        <button className={styles["pref"]}>Manage your preferences</button>
        <button className={styles["accept"]}>Accept</button>
      </div>
    </div>
  </div>
);

export default Card_about;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_about = () => (
         <div>
          <div className="cookie-card">
    <span className="title">🍪 Cookie Notice</span>
    <p className="description">We use cookies to ensure that we give you the best experience on our website. <a href="#">Read cookies policies</a>. </p>
    <div className="actions">
        <button className="pref">
            Manage your preferences
        </button>
        <button className="accept">
            Accept
        </button>
    </div>
</div>
        </div>
        );

        export default Card_about;
        
        
         */
}

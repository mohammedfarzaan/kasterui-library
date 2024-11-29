import React from "react";
import styles from "./Card_than.module.css";

const Card_than = () => (
  <div>
    <div className={styles["card"]}>
      <span className={styles["title"]}>🍪 Cookie Notice</span>
      <p className={styles["description"]}>
        We use cookies to ensure that we give you the best experience on our
        website. <a href="#">Read cookies policies</a>.{" "}
      </p>
      <div className={styles["actions"]}>
        <a className={styles["prefs"]}>Manage preferences</a>
        <button className={styles["decline"]}>Decline</button>
        <button className={styles["valid"]}>Accept</button>
      </div>
    </div>
  </div>
);

export default Card_than;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_than = () => (
         <div>
          <div className="card">
    <span className="title">🍪 Cookie Notice</span>
    <p className="description">We use cookies to ensure that we give you the best experience on our website. <a href="#">Read cookies policies</a>. </p>
    <div className="actions">
        <a className="prefs">
            Manage preferences
        </a>
        <button className="decline">
            Decline
        </button>
        <button className="valid">
            Accept
        </button>
    </div>
</div>
        </div>
        );

        export default Card_than;
        
        
         */
}

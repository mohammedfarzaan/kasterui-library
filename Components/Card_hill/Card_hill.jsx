import React from "react";
import styles from "./Card_hill.module.css";

const Card_hill = () => (
  <div>
    <div className={styles["warning-general"]}>
      <div className={styles["confirm-div"]}>
        <p>
          <strong>The “Horror Games” category will be eliminated.</strong>
          <span>Are you sure you want to continue?</span>
        </p>
        <div className={styles["modals-container"]}>
          <button className={styles["red-btn"]}>Cancel</button>
          <button className={styles["green-btn"]}>Accept</button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_hill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hill = () => (
         <div>
          <div className="warning-general">
  <div className="confirm-div">
    <p>
      <strong>The “Horror Games” category will be eliminated.</strong>
      <span>Are you sure you want to continue?</span>
    </p>
    <div className="modals-container">
      <button className="red-btn">Cancel</button>
      <button className="green-btn">Accept</button>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_hill;
        
        
         */
}

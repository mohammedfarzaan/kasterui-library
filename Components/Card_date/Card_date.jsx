import React from "react";
import styles from "./Card_date.module.css";

const Card_date = () => (
  <div>
    <div className={styles["card"] + styles["columns"]}>
      <div className={styles["button-container"]}>
        <button className={styles["btn"] + styles["red-flag"]}>RED FLAG</button>
        <p className={styles["offer"]}>JOB OFFER</p>
      </div>
      <p className={styles["secondary-heading"]}>
        "As a UX designer,you will design the entire UI."
      </p>
      <p className={styles["card-description"]}>
        Verify alignment of job description with proposed position.
        <br />
      </p>
    </div>
  </div>
);

export default Card_date;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_date = () => (
         <div>
          <div className="card columns">
     
      <div className="button-container">
        <button className="btn red-flag">RED FLAG</button>
        <p className="offer">JOB OFFER</p>
      </div>
      <p className="secondary-heading">
        "As a UX designer,you will design the entire UI."
      </p>
      <p className="card-description">Verify alignment of job description with proposed position.<br />
      
      </p>
    </div>
        </div>
        );

        export default Card_date;
        
        
         */
}

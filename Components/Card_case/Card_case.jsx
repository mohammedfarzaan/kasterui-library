import React from "react";
import styles from "./Card_case.module.css";

const Card_case = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        <div className={styles["card-title"]}>Cool Card</div>
        <p className={styles["card-description"]}>
          This is a cool card design.
        </p>
        <button className={styles["card-button"]}>Click Me</button>
      </div>
    </div>
  </div>
);

export default Card_case;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_case = () => (
         <div>
          <div className="card">
    <div className="card-content">
      <div className="card-title">Cool Card</div>
      <p className="card-description">This is a cool card design.</p>
      <button className="card-button">Click Me</button>
    </div>
  </div>
        </div>
        );

        export default Card_case;
        
        
         */
}

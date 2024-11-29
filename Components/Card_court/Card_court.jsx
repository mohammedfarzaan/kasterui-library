import React from "react";
import styles from "./Card_court.module.css";

const Card_court = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["child"] + styles["card-1"]}>1</div>
      <div className={styles["child"] + styles["card-2"]}>2</div>
      <div className={styles["child"] + styles["card-3"]}>3</div>
    </div>
  </div>
);

export default Card_court;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_court = () => (
         <div>
          <div className="card">
  <div className="child card-1">1</div>
  <div className="child card-2">2</div>
  <div className="child card-3">3</div>
</div>
        </div>
        );

        export default Card_court;
        
        
         */
}

import React from "react";
import styles from "./Card_spend.module.css";

const Card_spend = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["front"]}>
          <p className={styles["front-heading"]}>Front card</p>
          <p>Follow Me For More</p>
        </div>
        <div className={styles["back"]}>
          <p className={styles["back-heading"]}>Back card</p>
          <p>Follow Me For More</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_spend;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_spend = () => (
         <div>
          <div className="container">
  <div className="card">
    <div className="front">
      <p className="front-heading">Front card</p>
      <p>Follow Me For More</p>
    </div>
    <div className="back">
      <p className="back-heading">Back card</p>
      <p>Follow Me For More</p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_spend;
        
        
         */
}

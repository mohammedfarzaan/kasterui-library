import React from "react";
import styles from "./Card_pick.module.css";

const Card_pick = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>1</div>
      <div className={styles["card"]}>2</div>
      <div className={styles["card"]}>3</div>
      <div className={styles["card"]}>4</div>
    </div>
  </div>
);

export default Card_pick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pick = () => (
         <div>
          <div className="container">
  <div className="card">1</div>
  <div className="card">2</div>
  <div className="card">3</div>
  <div className="card">4</div>
</div>
        </div>
        );

        export default Card_pick;
        
        
         */
}

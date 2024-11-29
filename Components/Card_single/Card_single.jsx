import React from "react";
import styles from "./Card_single.module.css";

const Card_single = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <span>Hover me</span>
      </div>
      <div className={styles["card"]}>
        <span>Hover me</span>
      </div>
      <div className={styles["card"]}>
        <span>Hover me</span>
      </div>
    </div>
  </div>
);

export default Card_single;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_single = () => (
         <div>
          <div className="container">
    <div className="card">
        <span>Hover me</span>
    </div>
    <div className="card">
        <span>Hover me</span>
    </div>
    <div className="card">
        <span>Hover me</span>
    </div>
</div>
        </div>
        );

        export default Card_single;
        
        
         */
}

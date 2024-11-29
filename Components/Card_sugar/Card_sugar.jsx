import React from "react";
import styles from "./Card_sugar.module.css";

const Card_sugar = () => (
  <div>
    <div className={styles["container"]}>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>Hover me</div>
      </div>
    </div>
  </div>
);

export default Card_sugar;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sugar = () => (
         <div>
          <div className="container">
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <div className="card">
    <div className="card-header">
      Hover me
    </div>
  </div>
</div>
        </div>
        );

        export default Card_sugar;
        
        
         */
}

import React from "react";
import styles from "./Card_labor.module.css";

const Card_labor = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["img-card"]}></div>
      <div className={styles["add-cart"]}>Add to Cart</div>
      <div className={styles["info-card"]}>
        <p>
          <strong>Lorem ipsum</strong>
        </p>
        <p>Price : 15$</p>
      </div>
    </div>
  </div>
);

export default Card_labor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_labor = () => (
         <div>
          <div className="card">
  <div className="img-card">
  </div>
  <div className="add-cart">Add to Cart</div>
  <div className="info-card">
    <p><strong>Lorem ipsum</strong></p>
    <p>Price : 15$</p>
  </div>
  
</div>
        </div>
        );

        export default Card_labor;
        
        
         */
}

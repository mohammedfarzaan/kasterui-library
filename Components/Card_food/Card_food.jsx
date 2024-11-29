import React from "react";
import styles from "./Card_food.module.css";

const Card_food = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-details"]}>
        <p className={styles["text-title"]}>Card title</p>
        <p className={styles["text-body"]}>Here are the details of the card</p>
      </div>
      <button className={styles["card-button"]}>More info</button>
    </div>
  </div>
);

export default Card_food;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_food = () => (
         <div>
          <div className="card">
  <div className="card-details">
    <p className="text-title">Card title</p>
    <p className="text-body">Here are the details of the card</p>
  </div>
  <button className="card-button">More info</button>
</div>
        </div>
        );

        export default Card_food;
        
        
         */
}

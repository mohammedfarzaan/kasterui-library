import React from "react";
import styles from "./Card_knife.module.css";

const Card_knife = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-details"]}>
        <p className={styles["text-title"]}>Card Title</p>
        <p className={styles["text-body"]}>Card Details</p>
      </div>
      <a className={styles["card-button"]} href="#link">
        More info
      </a>
    </div>
  </div>
);

export default Card_knife;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_knife = () => (
         <div>
          <div className="card">
  <div className="card-details">
    <p className="text-title">Card Title</p>
    <p className="text-body">Card Details</p>
  </div>
  <a className="card-button" href="#link">More info</a>
</div>
        </div>
        );

        export default Card_knife;
        
        
         */
}

import React from "react";
import styles from "./Card_supply.module.css";

const Card_supply = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-info"]}>
        <p className={styles["title"]}>Magic Card</p>
      </div>
    </div>
  </div>
);

export default Card_supply;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_supply = () => (
         <div>
          <div className="card">
  <div className="card-info">
    <p className="title">Magic Card</p>
  </div>
</div>
        </div>
        );

        export default Card_supply;
        
        
         */
}

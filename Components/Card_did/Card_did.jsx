import React from "react";
import styles from "./Card_did.module.css";

const Card_did = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card1"]}></div>
      <div className={styles["card2"]}></div>
      <div className={styles["card3"]}>
        * Card stacks are awesome and inspired by real card stack at your table.
      </div>
    </div>
  </div>
);

export default Card_did;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_did = () => (
         <div>
          <div className="container">
  <div className="card1"></div>
  <div className="card2"></div>
  <div className="card3">
    * Card stacks are awesome and inspired by real card stack at your table.
  </div>
</div>
        </div>
        );

        export default Card_did;
        
        
         */
}

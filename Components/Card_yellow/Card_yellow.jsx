import React from "react";
import styles from "./Card_yellow.module.css";

const Card_yellow = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>Good morning</div>
    </div>
  </div>
);

export default Card_yellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_yellow = () => (
         <div>
          <div className="container">
  <div className="card">Good morning</div>
</div>
        </div>
        );

        export default Card_yellow;
        
        
         */
}

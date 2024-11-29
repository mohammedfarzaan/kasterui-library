import React from "react";
import styles from "./Card_get.module.css";

const Card_get = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["card-inner"]}></div>
    </div>
  </div>
);

export default Card_get;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_get = () => (
         <div>
          <div className="card">
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="card-inner"></div>
</div>
        </div>
        );

        export default Card_get;
        
        
         */
}

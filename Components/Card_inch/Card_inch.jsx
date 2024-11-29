import React from "react";
import styles from "./Card_inch.module.css";

const Card_inch = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <span className={styles["title"]}>GLASS EFFECT</span>
        <div>
          <strong>JOE WATSON SBF</strong>
          <p>0000 000 000 0000</p>
          <span>VALID</span> <span>01/28</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_inch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_inch = () => (
         <div>
          <div className="container">
  <div className="box">
    <span className="title">GLASS EFFECT</span>
    <div>
      <strong>JOE WATSON SBF</strong>
      <p>0000 000 000 0000</p>
      <span>VALID</span> <span>01/28</span>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_inch;
        
        
         */
}

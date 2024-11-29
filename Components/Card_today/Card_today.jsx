import React from "react";
import styles from "./Card_today.module.css";

const Card_today = () => (
  <div>
    <div className={styles["uno-card"]}>
      <div className={styles["card-inner"]}>
        <div className={styles["front"]}>
          <div className={styles["front-bg"]}></div>
        </div>
        <div className={styles["back"]}>
          <div className={styles["back-bg"]}>
            <p className={styles["uno"]}>UNO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_today;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_today = () => (
         <div>
          <div className="uno-card">
  <div className="card-inner">
    <div className="front">
      <div className="front-bg"></div>
    </div>
    <div className="back">
      <div className="back-bg">
        <p className="uno">UNO</p>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_today;
        
        
         */
}

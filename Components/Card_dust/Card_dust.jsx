import React from "react";
import styles from "./Card_dust.module.css";

const Card_dust = () => (
  <div>
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={styles["flip-card-front"]}>
          <p className={styles["title"]}>FLIP CARD</p>
          <p>Hover Me</p>
        </div>
        <div className={styles["flip-card-back"]}>
          <p className={styles["title"]}>BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_dust;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_dust = () => (
         <div>
          <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_dust;
        
        
         */
}

import React from "react";
import styles from "./Loader_bet.module.css";

const Loader_bet = () => (
  <div>
    <div className={styles["anim-box"]}>
      <div className={styles["anim-interieur"]}>
        <div className={styles["rect"] + styles["rect1"]}></div>
        <div className={styles["rect"] + styles["rect2"]}></div>
        <div className={styles["rect"] + styles["rect3"]}></div>
        <div className={styles["rect"] + styles["rect4"]}></div>
        <div className={styles["rect"] + styles["rect5"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_bet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bet = () => (
         <div>
          <div className="anim-box">
        <div className="anim-interieur">
            <div className="rect rect1"></div>
            <div className="rect rect2"></div>
            <div className="rect rect3"></div>
            <div className="rect rect4"></div>
            <div className="rect rect5"></div>
        </div>
    </div>
        </div>
        );

        export default Loader_bet;
        
        
         */
}

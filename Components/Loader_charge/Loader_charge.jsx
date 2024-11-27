import React from "react";
import styles from "./Loader_charge.module.css";

const Loader_charge = () => (
  <div>
    <div className={styles["con"]}>
      <div className={styles["side"] + styles["left"]}></div>
      <div className={styles["side"] + styles["right"]}></div>
      <div className={styles["side"] + styles["rightAbove"]}></div>
      <div className={styles["side"] + styles["bottom"]}></div>
    </div>
  </div>
);

export default Loader_charge;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_charge = () => (
         <div>
          <div className="con">
  <div className="side left"></div>
  <div className="side right"></div>
  <div className="side rightAbove"></div>
  <div className="side bottom"></div>
</div>
        </div>
        );

        export default Loader_charge;
        
        
         */
}

import React from "react";
import styles from "./Card_power.module.css";

const Card_power = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["stripe"]}>
        <div className={styles["text"]}>Uiverse Homepod</div>
      </div>
      <div className={styles["frame"]}></div>
    </div>
  </div>
);

export default Card_power;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_power = () => (
         <div>
          <div className="card">
  <div className="stripe">
    <div className="text">Uiverse Homepod</div>
  </div>
  <div className="frame"></div>
</div>
        </div>
        );

        export default Card_power;
        
        
         */
}

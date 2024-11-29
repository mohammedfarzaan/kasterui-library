import React from "react";
import styles from "./Card_motor.module.css";

const Card_motor = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["heading"]}>Popular this month</p>
      <p>Powered By</p>
      <p>Uiverse</p>
    </div>
  </div>
);

export default Card_motor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_motor = () => (
         <div>
          <div className="card">
  <p className="heading">
    Popular this month
  </p>
  <p>
    Powered By
  </p>
  <p>Uiverse
</p></div>
        </div>
        );

        export default Card_motor;
        
        
         */
}

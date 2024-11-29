import React from "react";
import styles from "./Button_bend.module.css";

const Button_bend = () => (
  <div>
    <div className={styles["notification"]}>
      <div className={styles["bell-container"]}>
        <div className={styles["bell"]}></div>
      </div>
    </div>
  </div>
);

export default Button_bend;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bend = () => (
         <div>
          <div className="notification">
  <div className="bell-container">
    <div className="bell"></div>
  </div>
</div>
        </div>
        );

        export default Button_bend;
        
        
         */
}

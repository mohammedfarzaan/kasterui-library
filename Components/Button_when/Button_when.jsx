import React from "react";
import styles from "./Button_when.module.css";

const Button_when = () => (
  <div>
    <div className={styles["wrap"]}>
      <button className={styles["btn"]}>
        <span className={styles["text"]}>Volume</span>
      </button>
    </div>
  </div>
);

export default Button_when;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_when = () => (
         <div>
          <div className="wrap">
    <button className="btn">
        <span className="text">Volume</span>
    </button>
</div>
        </div>
        );

        export default Button_when;
        
        
         */
}

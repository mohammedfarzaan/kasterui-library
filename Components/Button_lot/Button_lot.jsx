import React from "react";
import styles from "./Button_lot.module.css";

const Button_lot = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["base"]}></span>
      <span className={styles["red"]}></span>
    </button>
  </div>
);

export default Button_lot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lot = () => (
         <div>
          <button className="button">
  <span className="base"></span>
  <span className="red"></span>
</button>
        </div>
        );

        export default Button_lot;
        
        
         */
}

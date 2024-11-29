import React from "react";
import styles from "./Button_long.module.css";

const Button_long = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["base"]}></span>
      <span className={styles["red"]}></span>
    </button>
  </div>
);

export default Button_long;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_long = () => (
         <div>
          <button className="button">
  <span className="base"></span>
  <span className="red"></span>
</button>
        </div>
        );

        export default Button_long;
        
        
         */
}

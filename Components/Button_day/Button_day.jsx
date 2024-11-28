import React from "react";
import styles from "./Button_day.module.css";

const Button_day = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["front"]}> ⚡Join Now </span>
    </button>
  </div>
);

export default Button_day;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_day = () => (
         <div>
          <button className="button">
  <span className="front"> ⚡Join Now </span>
</button>
        </div>
        );

        export default Button_day;
        
        
         */
}

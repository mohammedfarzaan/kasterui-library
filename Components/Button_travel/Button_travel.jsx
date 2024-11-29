import React from "react";
import styles from "./Button_travel.module.css";

const Button_travel = () => (
  <div>
    <button className={styles["BTN-style"]}>
      <span className={styles["BTN-text"]}>Hover me</span>
    </button>
  </div>
);

export default Button_travel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_travel = () => (
         <div>
          <button className="BTN-style">
  <span className="BTN-text">Hover me</span>
</button>
        </div>
        );

        export default Button_travel;
        
        
         */
}

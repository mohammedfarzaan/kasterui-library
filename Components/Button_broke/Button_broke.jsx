import React from "react";
import styles from "./Button_broke.module.css";

const Button_broke = () => (
  <div>
    <button className={styles["animated-button"]}>
      <span>Hover me</span>
    </button>
  </div>
);

export default Button_broke;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_broke = () => (
         <div>
          <button className="animated-button">
  <span>Hover me</span>
</button>
        </div>
        );

        export default Button_broke;
        
        
         */
}
import React from "react";
import styles from "./Button_lack.module.css";

const Button_lack = () => (
  <div>
    <button className={styles["btn"]} data-text="HELLO">
      <span className={styles["hover"]}>HOVER</span>
    </button>
  </div>
);

export default Button_lack;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lack = () => (
         <div>
          <button className="btn" data-text="HELLO">
  <span className="hover">HOVER</span>
</button>
        </div>
        );

        export default Button_lack;
        
        
         */
}

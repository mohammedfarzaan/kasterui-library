import React from "react";
import styles from "./Button_grew.module.css";

const Button_grew = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>🔎</span>
    </button>
  </div>
);

export default Button_grew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_grew = () => (
         <div>
          <button className="button">
  <span className="span">🔎</span>
</button>
        </div>
        );

        export default Button_grew;
        
        
         */
}

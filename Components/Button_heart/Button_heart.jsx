import React from "react";
import styles from "./Button_heart.module.css";

const Button_heart = () => (
  <div>
    <button className={styles["cti"]}>
      <div className={styles["CTI"]}>Code to Infinity</div>
    </button>
  </div>
);

export default Button_heart;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_heart = () => (
         <div>
          <button className="cti">
  <div className="CTI">
    Code to Infinity
  </div>
</button>
        </div>
        );

        export default Button_heart;
        
        
         */
}

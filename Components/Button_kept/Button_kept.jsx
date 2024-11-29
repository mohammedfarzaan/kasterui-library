import React from "react";
import styles from "./Button_kept.module.css";

const Button_kept = () => (
  <div>
    <div>
      <button className={styles["btn"]}>
        <i className={styles["animation"]}></i>BUTTON
        <i className={styles["animation"]}></i>
      </button>
    </div>
  </div>
);

export default Button_kept;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_kept = () => (
         <div>
          <div>
    <button className="btn"><i className="animation"></i>BUTTON<i className="animation"></i>
    </button>
</div>
        </div>
        );

        export default Button_kept;
        
        
         */
}

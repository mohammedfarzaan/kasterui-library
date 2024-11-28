import React from "react";
import styles from "./Button_label.module.css";

const Button_label = () => (
  <div>
    <button className={styles["button-3d"]}>
      <span className={styles["button-text"]}>CLICK ME</span>
    </button>
  </div>
);

export default Button_label;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_label = () => (
         <div>
          <button className="button-3d">
  <span className="button-text">CLICK ME</span>
</button>
        </div>
        );

        export default Button_label;
        
        
         */
}

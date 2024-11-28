import React from "react";
import styles from "./Button_shine.module.css";

const Button_shine = () => (
  <div>
    <button className={styles["btn-shine"]}>
      <span>Shine</span>
    </button>
  </div>
);

export default Button_shine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_shine = () => (
         <div>
          <button className="btn-shine">
    <span>Shine</span>
</button>
        </div>
        );

        export default Button_shine;
        
        
         */
}

import React from "react";
import styles from "./Button_lot.module.css";

const Button_lot = () => (
  <div>
    <button className={styles["btn-shape"]}>
      <span className={styles["title"]}>hover me</span>
    </button>
  </div>
);

export default Button_lot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lot = () => (
         <div>
          <button className="btn-shape">
    <span className="title">
      hover me
    </span>
</button>
        </div>
        );

        export default Button_lot;
        
        
         */
}

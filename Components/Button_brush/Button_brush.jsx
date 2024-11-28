import React from "react";
import styles from "./Button_brush.module.css";

const Button_brush = () => (
  <div>
    <button className={styles["menu__icon"]}>
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_brush;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_brush = () => (
         <div>
          <button className="menu__icon">
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_brush;
        
        
         */
}

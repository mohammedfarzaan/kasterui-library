import React from "react";
import styles from "./Button_bring.module.css";

const Button_bring = () => (
  <div>
    <div className={styles["back"]}>
      <div className={styles["button_base"] + styles["b_3d"]}>
        <div>button</div>
        <div>button</div>
        <div>button</div>
        <div>button</div>
      </div>
    </div>
  </div>
);

export default Button_bring;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bring = () => (
         <div>
          <div className="back">
  <div className="button_base b_3d">
    <div>button</div>
    <div>button</div>
    <div>button</div>
    <div>button</div>
  </div>
</div>
        </div>
        );

        export default Button_bring;
        
        
         */
}

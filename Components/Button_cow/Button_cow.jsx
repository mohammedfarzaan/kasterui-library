import React from "react";
import styles from "./Button_cow.module.css";

const Button_cow = () => (
  <div>
    <button type="button" className={styles["button"]}>
      <div className={styles["button-top"]}>3D Button</div>
      <div className={styles["button-bottom"]}></div>
      <div className={styles["button-base"]}></div>
    </button>
  </div>
);

export default Button_cow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cow = () => (
         <div>
          <button type="button" className="button">
  <div className="button-top">3D Button</div>
  <div className="button-bottom"></div>
  <div className="button-base"></div>
</button>
        </div>
        );

        export default Button_cow;
        
        
         */
}

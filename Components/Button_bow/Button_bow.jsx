import React from "react";
import styles from "./Button_bow.module.css";

const Button_bow = () => (
  <div>
    <div className={styles["container_mouse"]}>
      <span className={styles["mouse-btn"]}>
        <span className={styles["mouse-scroll"]}></span>
      </span>
      <span>Scroll Down</span>
    </div>
  </div>
);

export default Button_bow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bow = () => (
         <div>
          <div className="container_mouse">
    <span className="mouse-btn">
        <span className="mouse-scroll"></span>
    </span>
    <span>Scroll Down</span>
</div>
        </div>
        );

        export default Button_bow;
        
        
         */
}

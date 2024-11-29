import React from "react";
import styles from "./Button_engine.module.css";

const Button_engine = () => (
  <div>
    <div className={styles["svg-wrapper"]}>
      <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
        <rect className={styles["shape"]} height="60" width="190"></rect>
      </svg>
      <div className={styles["text"]}>Subscribe</div>
    </div>
  </div>
);

export default Button_engine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_engine = () => (
         <div>
          <div className="svg-wrapper">
  <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="190"></rect>
    </svg>
    <div className="text">Subscribe</div>
</div>
        </div>
        );

        export default Button_engine;
        
        
         */
}

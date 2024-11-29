import React from "react";
import styles from "./Button_extra.module.css";

const Button_extra = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["arrow"] + styles["right"]}></div>
      <div className={styles["text"]}>Learn More</div>
    </div>
  </div>
);

export default Button_extra;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_extra = () => (
         <div>
          <div className="box">
  <div className="arrow right"></div>
  <div className="text">Learn More</div>
</div>
        </div>
        );

        export default Button_extra;
        
        
         */
}

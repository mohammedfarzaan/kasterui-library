import React from "react";
import styles from "./Button_nor.module.css";

const Button_nor = () => (
  <div>
    <div className={styles["arrow"]}>
      <div className={styles["arrow-top"]}></div>
      <div className={styles["arrow-bottom"]}></div>
    </div>
  </div>
);

export default Button_nor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nor = () => (
         <div>
          <div className="arrow">
  <div className="arrow-top"></div>
  <div className="arrow-bottom"></div>
</div>
        </div>
        );

        export default Button_nor;
        
        
         */
}

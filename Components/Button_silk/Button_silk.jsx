import React from "react";
import styles from "./Button_silk.module.css";

const Button_silk = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["btn"]}>
        <button href="#">HOVER ME</button>
      </div>
    </div>
  </div>
);

export default Button_silk;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_silk = () => (
         <div>
          <div className="box">
  <div className="btn">
    <button href="#">HOVER ME</button>
  </div>
</div>
        </div>
        );

        export default Button_silk;
        
        
         */
}

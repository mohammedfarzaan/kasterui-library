import React from "react";
import styles from "./Button_ranch.module.css";

const Button_ranch = () => (
  <div>
    <button className={styles["delete-button"]}>␡</button>
  </div>
);

export default Button_ranch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_ranch = () => (
         <div>
          <button className="delete-button">
  ␡
</button>
        </div>
        );

        export default Button_ranch;
        
        
         */
}

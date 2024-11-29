import React from "react";
import styles from "./Button_bean.module.css";

const Button_bean = () => (
  <div>
    <button className={styles["box"]}>Button</button>
  </div>
);

export default Button_bean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bean = () => (
         <div>
          <button className="box">
  Button
</button>
        </div>
        );

        export default Button_bean;
        
        
         */
}

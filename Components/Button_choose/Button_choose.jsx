import React from "react";
import styles from "./Button_choose.module.css";

const Button_choose = () => (
  <div>
    <button className={styles["btn"]}>Hover Me!</button>
  </div>
);

export default Button_choose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_choose = () => (
         <div>
          <button className="btn">Hover Me!</button>
        </div>
        );

        export default Button_choose;
        
        
         */
}
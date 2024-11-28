import React from "react";
import styles from "./Button_buy.module.css";

const Button_buy = () => (
  <div>
    <button className={styles["button"]}>Awesome Button</button>
  </div>
);

export default Button_buy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_buy = () => (
         <div>
          <button className="button">Awesome Button</button>
        </div>
        );

        export default Button_buy;
        
        
         */
}

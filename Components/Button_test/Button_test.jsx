import React from "react";
import styles from "./Button_test.module.css";

const Button_test = () => (
  <div>
    <button className={styles["button"]}>Subscribe</button>
  </div>
);

export default Button_test;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_test = () => (
         <div>
          <button className="button">
  Subscribe
</button>
        </div>
        );

        export default Button_test;
        
        
         */
}

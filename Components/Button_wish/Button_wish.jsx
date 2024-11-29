import React from "react";
import styles from "./Button_wish.module.css";

const Button_wish = () => (
  <div>
    <button className={styles["my-button"]}>Click me!</button>
  </div>
);

export default Button_wish;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wish = () => (
         <div>
          <button className="my-button">
  Click me!
</button>
        </div>
        );

        export default Button_wish;
        
        
         */
}

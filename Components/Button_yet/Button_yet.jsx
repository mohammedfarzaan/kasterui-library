import React from "react";
import styles from "./Button_yet.module.css";

const Button_yet = () => (
  <div>
    <button className={styles["button"]}>
      <b>Button</b>
    </button>
  </div>
);

export default Button_yet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_yet = () => (
         <div>
          <button className="button">
  <b>
  Button
  </b>
</button>
        </div>
        );

        export default Button_yet;
        
        
         */
}

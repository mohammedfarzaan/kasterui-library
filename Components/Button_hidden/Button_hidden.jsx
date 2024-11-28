import React from "react";
import styles from "./Button_hidden.module.css";

const Button_hidden = () => (
  <div>
    <button className={styles["button"]}>
      <p>Button</p>
    </button>
  </div>
);

export default Button_hidden;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hidden = () => (
         <div>
          <button className="button">
  <p>Button</p>
</button>
        </div>
        );

        export default Button_hidden;
        
        
         */
}

import React from "react";
import styles from "./Button_dot.module.css";

const Button_dot = () => (
  <div>
    <button className={styles["ui-btn"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_dot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dot = () => (
         <div>
          <button className="ui-btn">
  <span>
    Button 
  </span>
</button>
        </div>
        );

        export default Button_dot;
        
        
         */
}

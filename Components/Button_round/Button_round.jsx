import React from "react";
import styles from "./Button_round.module.css";

const Button_round = () => (
  <div>
    <button className={styles["ui-btn"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_round;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_round = () => (
         <div>
          <button className="ui-btn">
  <span>
    Button 
  </span>
</button>
        </div>
        );

        export default Button_round;
        
        
         */
}

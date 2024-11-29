import React from "react";
import styles from "./Button_push.module.css";

const Button_push = () => (
  <div>
    <button className={styles["btn"]}>
      <div className={styles["scroll"]}> </div>
    </button>
  </div>
);

export default Button_push;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_push = () => (
         <div>
          <button className="btn">
    <div className="scroll"> </div>
</button>
        </div>
        );

        export default Button_push;
        
        
         */
}

import React from "react";
import styles from "./Button_for.module.css";

const Button_for = () => (
  <div>
    <button className={styles["btn"]}>PLAY</button>
  </div>
);

export default Button_for;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_for = () => (
         <div>
          <button className="btn">
  PLAY
</button>
        </div>
        );

        export default Button_for;
        
        
         */
}

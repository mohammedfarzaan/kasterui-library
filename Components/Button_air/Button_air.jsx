import React from "react";
import styles from "./Button_air.module.css";

const Button_air = () => (
  <div>
    <button className={styles["game-button"]}>Play Now!</button>
  </div>
);

export default Button_air;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_air = () => (
         <div>
          <button className="game-button">Play Now!</button>
        </div>
        );

        export default Button_air;
        
        
         */
}

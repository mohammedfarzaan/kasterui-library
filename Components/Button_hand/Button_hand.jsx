import React from "react";
import styles from "./Button_hand.module.css";

const Button_hand = () => (
  <div>
    <button className={styles["btn-hover"]}>HOVER ME</button>
  </div>
);

export default Button_hand;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hand = () => (
         <div>
          <button className="btn-hover">HOVER ME</button>
        </div>
        );

        export default Button_hand;
        
        
         */
}

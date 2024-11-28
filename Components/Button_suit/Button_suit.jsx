import React from "react";
import styles from "./Button_suit.module.css";

const Button_suit = () => (
  <div>
    <button className={styles["button"]}>
      <div>Hover</div>
    </button>
  </div>
);

export default Button_suit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_suit = () => (
         <div>
          <button className="button">
  <div>Hover</div>
</button>
        </div>
        );

        export default Button_suit;
        
        
         */
}

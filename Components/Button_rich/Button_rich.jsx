import React from "react";
import styles from "./Button_rich.module.css";

const Button_rich = () => (
  <div>
    <button className={styles["button"]}>
      <span>Contact</span>
    </button>
  </div>
);

export default Button_rich;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_rich = () => (
         <div>
          <button className="button">
  <span>Contact</span>
</button>
        </div>
        );

        export default Button_rich;
        
        
         */
}

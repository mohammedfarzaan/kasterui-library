import React from "react";
import styles from "./Button_facing.module.css";

const Button_facing = () => (
  <div>
    <button role="button" className={styles["button"]}>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_facing;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_facing = () => (
         <div>
          <button role="button" className="button">
  <span className="text">Button</span>
</button>
        </div>
        );

        export default Button_facing;
        
        
         */
}

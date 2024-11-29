import React from "react";
import styles from "./Button_quick.module.css";

const Button_quick = () => (
  <div>
    <button className={styles["button"]}> Hey, Hover Me</button>
  </div>
);

export default Button_quick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_quick = () => (
         <div>
          <button className="button"> Hey, Hover Me
</button>
        </div>
        );

        export default Button_quick;
        
        
         */
}

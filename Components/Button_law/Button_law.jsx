import React from "react";
import styles from "./Button_law.module.css";

const Button_law = () => (
  <div>
    <a href="#" className={styles["menu__link"]}>
      Hover me!
    </a>
  </div>
);

export default Button_law;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_law = () => (
         <div>
          <a href="#" className="menu__link">
  Hover me!
</a>
        </div>
        );

        export default Button_law;
        
        
         */
}

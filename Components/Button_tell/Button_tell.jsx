import React from "react";
import styles from "./Button_tell.module.css";

const Button_tell = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["light-border"]}>Colorful Shiny</div>
    </button>
  </div>
);

export default Button_tell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tell = () => (
         <div>
          <button className="button">
  <div className="light-border">Colorful Shiny</div>
</button>
        </div>
        );

        export default Button_tell;
        
        
         */
}

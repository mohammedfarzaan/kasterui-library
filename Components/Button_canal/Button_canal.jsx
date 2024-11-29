import React from "react";
import styles from "./Button_canal.module.css";

const Button_canal = () => (
  <div>
    <button className={styles["swipe-button"]}>Hover Me</button>
  </div>
);

export default Button_canal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_canal = () => (
         <div>
          <button className="swipe-button">Hover Me</button>
        </div>
        );

        export default Button_canal;
        
        
         */
}

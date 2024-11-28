import React from "react";
import styles from "./Button_spring.module.css";

const Button_spring = () => (
  <div>
    <button className={styles["button"]}>Minecraft</button>
  </div>
);

export default Button_spring;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_spring = () => (
         <div>
          <button className="button">Minecraft</button>
        </div>
        );

        export default Button_spring;
        
        
         */
}

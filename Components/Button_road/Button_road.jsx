import React from "react";
import styles from "./Button_road.module.css";

const Button_road = () => (
  <div>
    <button className={styles["button"]}>Play it</button>
  </div>
);

export default Button_road;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_road = () => (
         <div>
          <button className="button">Play it</button>
        </div>
        );

        export default Button_road;
        
        
         */
}

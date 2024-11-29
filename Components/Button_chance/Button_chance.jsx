import React from "react";
import styles from "./Button_chance.module.css";

const Button_chance = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["text"]}>HOVER ME</span>
      <div className={styles["wave"]}></div>
    </button>
  </div>
);

export default Button_chance;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_chance = () => (
         <div>
          <button className="button">
    <span className="text">HOVER ME</span>
    <div className="wave"></div>
</button>
        </div>
        );

        export default Button_chance;
        
        
         */
}

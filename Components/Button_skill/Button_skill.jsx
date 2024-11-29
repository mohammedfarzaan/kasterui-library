import React from "react";
import styles from "./Button_skill.module.css";

const Button_skill = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["left"]}></span>
      <span>Hover Me</span>
      <span className={styles["right"]}></span>
    </button>
  </div>
);

export default Button_skill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_skill = () => (
         <div>
          <button className="button">
  <span className="left"></span>
  <span>Hover Me</span>
  <span className="right"></span>
</button>
        </div>
        );

        export default Button_skill;
        
        
         */
}

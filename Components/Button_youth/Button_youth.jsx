import React from "react";
import styles from "./Button_youth.module.css";

const Button_youth = () => (
  <div>
    <button className={styles["menu__button"]}>
      <span>Hover me!</span>
    </button>
  </div>
);

export default Button_youth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_youth = () => (
         <div>
          <button className="menu__button">
  <span>Hover me!</span>
</button>
        </div>
        );

        export default Button_youth;
        
        
         */
}

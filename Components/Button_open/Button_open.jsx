import React from "react";
import styles from "./Button_open.module.css";

const Button_open = () => (
  <div>
    <button role="button" className={styles["golden-button"]}>
      <span className={styles["golden-text"]}>Golden Button</span>
    </button>
  </div>
);

export default Button_open;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_open = () => (
         <div>
          <button role="button" className="golden-button">
  <span className="golden-text">Golden Button</span>
</button>
        </div>
        );

        export default Button_open;
        
        
         */
}

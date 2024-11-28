import React from "react";
import styles from "./Button_tent.module.css";

const Button_tent = () => (
  <div>
    <button data-text="Awesome" className={styles["button"]}>
      <span className={styles["actual-text"]}>&nbsp;uiverse&nbsp;</span>
      <span className={styles["hover-text"]} aria-hidden="true">
        &nbsp;uiverse&nbsp;
      </span>
    </button>
  </div>
);

export default Button_tent;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tent = () => (
         <div>
          <button data-text="Awesome" className="button">
    <span className="actual-text">&nbsp;uiverse&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;uiverse&nbsp;</span>
</button>
        </div>
        );

        export default Button_tent;
        
        
         */
}

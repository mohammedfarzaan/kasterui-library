import React from "react";
import styles from "./Button_place.module.css";

const Button_place = () => (
  <div>
    <button className={styles["btn"] + styles["btn-primary"]}>
      <span className={styles["btn-txt"]}>Get started</span>
      <kbd className={styles["btn-kbd"]}>G</kbd>
    </button>
  </div>
);

export default Button_place;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_place = () => (
         <div>
          <button className="btn btn-primary">
  <span className="btn-txt">Get started</span>
  <kbd className="btn-kbd">G</kbd>
</button>
        </div>
        );

        export default Button_place;
        
        
         */
}

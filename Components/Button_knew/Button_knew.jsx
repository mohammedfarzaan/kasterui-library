import React from "react";
import styles from "./Button_knew.module.css";

const Button_knew = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button_lg"]}>
        <span className={styles["button_sl"]}></span>
        <span className={styles["button_text"]}>Download Now</span>
      </span>
    </button>
  </div>
);

export default Button_knew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_knew = () => (
         <div>
          <button className="button">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">Download Now</span>
    </span>
</button>
        </div>
        );

        export default Button_knew;
        
        
         */
}

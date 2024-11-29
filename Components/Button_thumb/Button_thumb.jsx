import React from "react";
import styles from "./Button_thumb.module.css";

const Button_thumb = () => (
  <div>
    <button className={styles["btn-17"]}>
      <span className={styles["text-container"]}>
        <span className={styles["text"]}>Button</span>
      </span>
    </button>
  </div>
);

export default Button_thumb;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_thumb = () => (
         <div>
          <button className="btn-17">
  <span className="text-container">
    <span className="text">Button</span>
  </span>
</button>
        </div>
        );

        export default Button_thumb;
        
        
         */
}

import React from "react";
import styles from "./Button_mark.module.css";

const Button_mark = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["text-button"]}>Get pro now</span>
    </button>
  </div>
);

export default Button_mark;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mark = () => (
         <div>
          <button className="button">
  <span className="text-button">Get pro now</span>
</button>
        </div>
        );

        export default Button_mark;
        
        
         */
}

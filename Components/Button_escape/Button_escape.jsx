import React from "react";
import styles from "./Button_escape.module.css";

const Button_escape = () => (
  <div>
    <button className={styles["btn-shape"]}>
      <span className={styles["title"]}>hover me</span>
    </button>
  </div>
);

export default Button_escape;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_escape = () => (
         <div>
          <button className="btn-shape">
    <span className="title">
      hover me
    </span>
</button>
        </div>
        );

        export default Button_escape;
        
        
         */
}

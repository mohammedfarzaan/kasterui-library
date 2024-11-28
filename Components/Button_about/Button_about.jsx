import React from "react";
import styles from "./Button_about.module.css";

const Button_about = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Modern Button</span>
    </button>
  </div>
);

export default Button_about;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_about = () => (
         <div>
          <button className="btn">
  <span>Modern Button</span>
</button>
        </div>
        );

        export default Button_about;
        
        
         */
}

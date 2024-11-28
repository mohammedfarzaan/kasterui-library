import React from "react";
import styles from "./Button_age.module.css";

const Button_age = () => (
  <div>
    <a className={styles["btn"]} href="#">
      I am a button
    </a>
  </div>
);

export default Button_age;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_age = () => (
         <div>
          <a className="btn" href="#">I am a button</a>
        </div>
        );

        export default Button_age;
        
        
         */
}

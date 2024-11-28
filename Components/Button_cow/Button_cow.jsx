import React from "react";
import styles from "./Button_cow.module.css";

const Button_cow = () => (
  <div>
    <a href="#" className={styles["btn"]}>
      {" "}
      Click Me
    </a>
  </div>
);

export default Button_cow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cow = () => (
         <div>
          <a href="#" className="btn"> Click Me</a>
        </div>
        );

        export default Button_cow;
        
        
         */
}

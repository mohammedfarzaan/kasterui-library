import React from "react";
import styles from "./Button_cool.module.css";

const Button_cool = () => (
  <div>
    <button className={styles["testbutton"]}>Click me</button>
  </div>
);

export default Button_cool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cool = () => (
         <div>
          <button className="testbutton">
  Click me
</button>
        </div>
        );

        export default Button_cool;
        
        
         */
}

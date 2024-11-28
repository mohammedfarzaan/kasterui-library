import React from "react";
import styles from "./Button_got.module.css";

const Button_got = () => (
  <div>
    <button className={styles["button"] + styles["font"]}>Hold Me</button>
  </div>
);

export default Button_got;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_got = () => (
         <div>
          <button className="button font">Hold Me</button>
        </div>
        );

        export default Button_got;
        
        
         */
}

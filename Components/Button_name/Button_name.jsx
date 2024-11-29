import React from "react";
import styles from "./Button_name.module.css";

const Button_name = () => (
  <div>
    <button className={styles["button"]}>Send</button>
  </div>
);

export default Button_name;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_name = () => (
         <div>
          <button className="button">
  Send
</button>
        </div>
        );

        export default Button_name;
        
        
         */
}

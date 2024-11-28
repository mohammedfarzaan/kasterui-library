import React from "react";
import styles from "./Button_port.module.css";

const Button_port = () => (
  <div>
    <button className={styles["button"]}>
      <span>Hover me</span>
    </button>
  </div>
);

export default Button_port;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_port = () => (
         <div>
          <button className="button">
  <span>Hover me</span>
</button>
        </div>
        );

        export default Button_port;
        
        
         */
}

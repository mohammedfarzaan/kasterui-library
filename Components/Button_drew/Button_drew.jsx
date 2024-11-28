import React from "react";
import styles from "./Button_drew.module.css";

const Button_drew = () => (
  <div>
    <button className={styles["space-adventure-button"]}>
      Join the Adventure
    </button>
  </div>
);

export default Button_drew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_drew = () => (
         <div>
          <button className="space-adventure-button">Join the Adventure</button>
        </div>
        );

        export default Button_drew;
        
        
         */
}

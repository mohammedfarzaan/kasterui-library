import React from "react";
import styles from "./Button_wife.module.css";

const Button_wife = () => (
  <div>
    <button
      className={
        styles["btn"] + styles["btn-1"] + styles["hover-filled-slide-left"]
      }
    >
      <span>hover me</span>
    </button>
  </div>
);

export default Button_wife;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wife = () => (
         <div>
          <button className="btn btn-1 hover-filled-slide-left">
    <span>hover me</span>
</button>
        </div>
        );

        export default Button_wife;
        
        
         */
}

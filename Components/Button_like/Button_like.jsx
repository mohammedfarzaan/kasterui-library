import React from "react";
import styles from "./Button_like.module.css";

const Button_like = () => (
  <div>
    <button className={styles["click"]}>Click me</button>
  </div>
);

export default Button_like;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_like = () => (
         <div>
          <button className="click">Click me</button>
        </div>
        );

        export default Button_like;
        
        
         */
}

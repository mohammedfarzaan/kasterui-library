import React from "react";
import styles from "./Button_pencil.module.css";

const Button_pencil = () => (
  <div>
    <button className={styles["custom-button"]}>
      <span>Click Here </span>
    </button>
  </div>
);

export default Button_pencil;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pencil = () => (
         <div>
          <button className="custom-button"><span>Click Here </span></button>
        </div>
        );

        export default Button_pencil;
        
        
         */
}

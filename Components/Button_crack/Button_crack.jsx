import React from "react";
import styles from "./Button_crack.module.css";

const Button_crack = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-1"]}>
      Read More
    </button>
  </div>
);

export default Button_crack;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_crack = () => (
         <div>
          <button className="custom-btn btn-1">Read More</button>
        </div>
        );

        export default Button_crack;
        
        
         */
}

import React from "react";
import styles from "./Button_jar.module.css";

const Button_jar = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-1"]}>
      Read More
    </button>
  </div>
);

export default Button_jar;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_jar = () => (
         <div>
          <button className="custom-btn btn-1">Read More</button>
        </div>
        );

        export default Button_jar;
        
        
         */
}

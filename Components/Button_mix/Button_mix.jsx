import React from "react";
import styles from "./Button_mix.module.css";

const Button_mix = () => (
  <div>
    <button className={styles["button"]}>Submit</button>
  </div>
);

export default Button_mix;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mix = () => (
         <div>
          <button className="button">Submit</button>
        </div>
        );

        export default Button_mix;
        
        
         */
}

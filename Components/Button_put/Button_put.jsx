import React from "react";
import styles from "./Button_put.module.css";

const Button_put = () => (
  <div>
    <button className={styles["button"]}>
      Join Now<span className={styles["arrow"]}>&gt;</span>
    </button>
  </div>
);

export default Button_put;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_put = () => (
         <div>
          <button className="button">Join Now<span className="arrow">&gt;</span></button>
        </div>
        );

        export default Button_put;
        
        
         */
}

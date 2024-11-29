import React from "react";
import styles from "./Button_bread.module.css";

const Button_bread = () => (
  <div>
    <button className={styles["button"]}>
      <span>Explore </span>
    </button>
  </div>
);

export default Button_bread;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bread = () => (
         <div>
          <button className="button">
  <span>Explore </span>
</button>
        </div>
        );

        export default Button_bread;
        
        
         */
}

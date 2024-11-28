import React from "react";
import styles from "./Button_spite.module.css";

const Button_spite = () => (
  <div>
    <button>
      Sign up
      <div className={styles["arrow-wrapper"]}>
        <div className={styles["arrow"]}></div>
      </div>
    </button>
  </div>
);

export default Button_spite;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_spite = () => (
         <div>
          <button>
    Sign up
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
</button>
        </div>
        );

        export default Button_spite;
        
        
         */
}

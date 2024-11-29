import React from "react";
import styles from "./Button_them.module.css";

const Button_them = () => (
  <div>
    <button>
      Sign up
      <div className={styles["arrow-wrapper"]}>
        <div className={styles["arrow"]}></div>
      </div>
    </button>
  </div>
);

export default Button_them;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_them = () => (
         <div>
          <button>
    Sign up
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
</button>
        </div>
        );

        export default Button_them;
        
        
         */
}

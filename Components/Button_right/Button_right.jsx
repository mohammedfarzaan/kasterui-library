import React from "react";
import styles from "./Button_right.module.css";

const Button_right = () => (
  <div>
    <button>
      <span className={styles["box"]}>Hover!</span>
    </button>
  </div>
);

export default Button_right;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_right = () => (
         <div>
          <button>
    <span className="box">
        Hover!
    </span>
</button>
        </div>
        );

        export default Button_right;
        
        
         */
}

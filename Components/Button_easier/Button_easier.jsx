import React from "react";
import styles from "./Button_easier.module.css";

const Button_easier = () => (
  <div>
    <div className={styles["wrapper"]}>
      <button> Button</button>
    </div>
  </div>
);

export default Button_easier;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_easier = () => (
         <div>
          <div className="wrapper">
  <button> Button
  </button>
</div>
        </div>
        );

        export default Button_easier;
        
        
         */
}

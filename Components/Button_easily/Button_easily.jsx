import React from "react";
import styles from "./Button_easily.module.css";

const Button_easily = () => (
  <div>
    <div className={styles["main_div"]}>
      <button>Sign up</button>
    </div>
  </div>
);

export default Button_easily;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_easily = () => (
         <div>
          <div className="main_div">
  <button>Sign up</button>
</div>
        </div>
        );

        export default Button_easily;
        
        
         */
}

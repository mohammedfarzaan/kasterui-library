import React from "react";
import styles from "./Button_fell.module.css";

const Button_fell = () => (
  <div>
    <button className={styles["mouse"]}>
      <div className={styles["scroll"]}></div>
    </button>
  </div>
);

export default Button_fell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fell = () => (
         <div>
          <button className="mouse">
  <div className="scroll"></div>

</button>
        </div>
        );

        export default Button_fell;
        
        
         */
}

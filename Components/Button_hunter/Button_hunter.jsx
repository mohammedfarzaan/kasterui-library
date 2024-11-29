import React from "react";
import styles from "./Button_hunter.module.css";

const Button_hunter = () => (
  <div>
    <button className={styles["button"]}>
      Join Today
      <p>→</p>
    </button>
  </div>
);

export default Button_hunter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hunter = () => (
         <div>
          <button className="button">
  Join Today
  <p>→</p>
</button>
        </div>
        );

        export default Button_hunter;
        
        
         */
}

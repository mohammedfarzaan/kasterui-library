import React from "react";
import styles from "./Button_few.module.css";

const Button_few = () => (
  <div>
    <div className={styles["gas"] + styles["ne"]}>
      <span className={styles["number"]}>10</span>
      <div className={styles["symbol"]}>Ne</div>
      <p className={styles["name"]}>Neon</p>
    </div>
  </div>
);

export default Button_few;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_few = () => (
         <div>
          <div className="gas ne">
  <span className="number">10</span>
  <div className="symbol">Ne</div>
  <p className="name">Neon</p>
</div>
        </div>
        );

        export default Button_few;
        
        
         */
}

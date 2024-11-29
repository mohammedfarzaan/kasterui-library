import React from "react";
import styles from "./Button_visit.module.css";

const Button_visit = () => (
  <div>
    <div className={styles["content"]}>
      <div className={styles["text"]}>LOADING...</div>
      <div className={styles["text"]}>LOADING...</div>
    </div>
  </div>
);

export default Button_visit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_visit = () => (
         <div>
          <div className="content">
  <div className="text">LOADING...</div>
  <div className="text">LOADING...</div>
</div>
        </div>
        );

        export default Button_visit;
        
        
         */
}

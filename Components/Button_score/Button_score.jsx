import React from "react";
import styles from "./Button_score.module.css";

const Button_score = () => (
  <div>
    <div className={styles["scrolldown"]} style="--color: skyblue">
      <div className={styles["chevrons"]}>
        <div className={styles["chevrondown"]}></div>
        <div className={styles["chevrondown"]}></div>
      </div>
    </div>
  </div>
);

export default Button_score;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_score = () => (
         <div>
          <div className="scrolldown" style="--color: skyblue">
    <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
    </div>
</div>
        </div>
        );

        export default Button_score;
        
        
         */
}

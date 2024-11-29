import React from "react";
import styles from "./Button_solve.module.css";

const Button_solve = () => (
  <div>
    <button>
      <span className={styles["button-text"]}></span>
      <span className={styles["animation"]}>
        <span className={styles["paper-wrapper"]}>
          <span className={styles["paper"]}></span>
        </span>
        <span className={styles["shredded-wrapper"]}>
          <span className={styles["shredded"]}></span>
        </span>
        <span className={styles["lid"]}></span>
        <span className={styles["can"]}>
          <span className={styles["filler"]}></span>
        </span>
      </span>
    </button>
  </div>
);

export default Button_solve;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_solve = () => (
         <div>
          <button>
  <span className="button-text">
  </span>
  <span className="animation">
    <span className="paper-wrapper">
      <span className="paper">
      </span>
    </span>
    <span className="shredded-wrapper">
      <span className="shredded">
      </span>
    </span>
    <span className="lid">
    </span>
    <span className="can">
      <span className="filler">
      </span>
    </span>
  </span>
</button>
        </div>
        );

        export default Button_solve;
        
        
         */
}

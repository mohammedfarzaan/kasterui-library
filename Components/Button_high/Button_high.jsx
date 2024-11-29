import React from "react";
import styles from "./Button_high.module.css";

const Button_high = () => (
  <div>
    <div
      className={styles["item"] + styles["button-parrot"]}
      style="--bg-color: #2c3e50"
    >
      <button>
        Click Me!
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
      </button>
    </div>
  </div>
);

export default Button_high;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_high = () => (
         <div>
          <div className="item button-parrot" style="--bg-color: #2c3e50">
    <button>Click Me!
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
    </button>
  </div>
        </div>
        );

        export default Button_high;
        
        
         */
}

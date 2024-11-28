import React from "react";
import styles from "./Button_tin.module.css";

const Button_tin = () => (
  <div>
    <button
      type="button"
      className={styles["btn"] + styles["cube"] + styles["cube-hover"]}
    >
      <div className={styles["bg-top"]}>
        <div className={styles["bg-inner"]}></div>
      </div>
      <div className={styles["bg-right"]}>
        <div className={styles["bg-inner"]}></div>
      </div>
      <div className={styles["bg"]}>
        <div className={styles["bg-inner"]}></div>
      </div>
      <div className={styles["text"]}>Hover Me</div>
    </button>
  </div>
);

export default Button_tin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tin = () => (
         <div>
          <button type="button" className="btn cube cube-hover">
  <div className="bg-top">
  <div className="bg-inner"></div>
  </div>
  <div className="bg-right">
  <div className="bg-inner"></div>
  </div>
  <div className="bg">
  <div className="bg-inner"></div>
  </div>
  <div className="text">Hover Me</div>
</button>
        </div>
        );

        export default Button_tin;
        
        
         */
}

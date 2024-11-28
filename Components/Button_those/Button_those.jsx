import React from "react";
import styles from "./Button_those.module.css";

const Button_those = () => (
  <div>
    <div className={styles["galaxy-button"]}>
      <button className={styles["space-button"]}>
        <span className={styles["backdrop"]}></span>
        <span className={styles["galaxy"]}></span>
        <label className={styles["text"]}>Space</label>
      </button>
      <div className={styles["bodydrop"]}></div>
    </div>
  </div>
);

export default Button_those;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_those = () => (
         <div>
          <div className="galaxy-button">
  <button className="space-button">
    <span className="backdrop"></span>
    <span className="galaxy"></span>
    <label className="text">Space</label>
  </button>
  <div className="bodydrop"></div>
</div>
        </div>
        );

        export default Button_those;
        
        
         */
}

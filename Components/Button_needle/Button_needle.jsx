import React from "react";
import styles from "./Button_needle.module.css";

const Button_needle = () => (
  <div>
    <button>
      <span>Hey! Siri</span>
      <div className={styles["line"]}></div>
      <div className={styles["line-2"]}></div>
      <div className={styles["speak"]}></div>
      <div className={styles["speak"] + styles["one"]}></div>
      <div className={styles["speak"] + styles["two"]}></div>
      <div className={styles["speak"] + styles["three"]}></div>
    </button>
  </div>
);

export default Button_needle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_needle = () => (
         <div>
          <button>
  <span>Hey! Siri</span>
  <div className="line"></div>
  <div className="line-2"></div>
  <div className="speak"></div>
  <div className="speak one"></div>
  <div className="speak two"></div>
  <div className="speak three"></div>
</button>
        </div>
        );

        export default Button_needle;
        
        
         */
}

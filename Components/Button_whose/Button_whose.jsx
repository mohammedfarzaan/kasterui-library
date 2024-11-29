import React from "react";
import styles from "./Button_whose.module.css";

const Button_whose = () => (
  <div>
    <div className={styles["container-button"]}>
      <div className={styles["hover"] + styles["bt-1"]}></div>
      <div className={styles["hover"] + styles["bt-2"]}></div>
      <div className={styles["hover"] + styles["bt-3"]}></div>
      <div className={styles["hover"] + styles["bt-4"]}></div>
      <div className={styles["hover"] + styles["bt-5"]}></div>
      <div className={styles["hover"] + styles["bt-6"]}></div>
      <button></button>
    </div>
  </div>
);

export default Button_whose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_whose = () => (
         <div>
          <div className="container-button">
  <div className="hover bt-1"></div>
  <div className="hover bt-2"></div>
  <div className="hover bt-3"></div>
  <div className="hover bt-4"></div>
  <div className="hover bt-5"></div>
  <div className="hover bt-6"></div>
  <button></button>
</div>
        </div>
        );

        export default Button_whose;
        
        
         */
}

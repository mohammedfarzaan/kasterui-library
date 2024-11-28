import React from "react";
import styles from "./Button_cap.module.css";

const Button_cap = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["container"]}>
        <div className={styles["folder"] + styles["folder_one"]}></div>
        <div className={styles["folder"] + styles["folder_two"]}></div>
        <div className={styles["folder"] + styles["folder_three"]}></div>
        <div className={styles["folder"] + styles["folder_four"]}></div>
      </div>
      <div className={styles["active_line"]}></div>
      <span className={styles["text"]}>File Explorer</span>
    </button>
  </div>
);

export default Button_cap;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cap = () => (
         <div>
          <button className="button">
  <div className="container">
    <div className="folder folder_one"></div>
    <div className="folder folder_two"></div>
    <div className="folder folder_three"></div>
    <div className="folder folder_four"></div>
  </div>
  <div className="active_line"></div>
  <span className="text">File Explorer</span>
</button>
        </div>
        );

        export default Button_cap;
        
        
         */
}

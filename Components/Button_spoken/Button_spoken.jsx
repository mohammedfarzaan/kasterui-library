import React from "react";
import styles from "./Button_spoken.module.css";

const Button_spoken = () => (
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

export default Button_spoken;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_spoken = () => (
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

        export default Button_spoken;
        
        
         */
}

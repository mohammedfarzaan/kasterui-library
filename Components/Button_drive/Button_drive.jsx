import React from "react";
import styles from "./Button_drive.module.css";

const Button_drive = () => (
  <div>
    <button className={styles["c-button"]}>
      <span className={styles["c-main"]}>
        <span className={styles["c-ico"]}>
          <span className={styles["c-blur"]}></span>{" "}
          <span className={styles["ico-text"]}>+</span>
        </span>
        button
      </span>
    </button>
  </div>
);

export default Button_drive;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_drive = () => (
         <div>
          <button className="c-button">
  <span className="c-main">
    <span className="c-ico"><span className="c-blur"></span> <span className="ico-text">+</span></span>
    button
  </span>
</button>
        </div>
        );

        export default Button_drive;
        
        
         */
}

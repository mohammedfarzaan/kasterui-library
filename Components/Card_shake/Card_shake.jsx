import React from "react";
import styles from "./Card_shake.module.css";

const Card_shake = () => (
  <div>
    <div className={styles["outer"]}>
      <div className={styles["dot"]}></div>
      <div className={styles["card"]}>
        <div className={styles["ray"]}></div>
        <div className={styles["text"]}>750k</div>
        <div>Views</div>
        <div className={styles["line"] + styles["topl"]}></div>
        <div className={styles["line"] + styles["leftl"]}></div>
        <div className={styles["line"] + styles["bottoml"]}></div>
        <div className={styles["line"] + styles["rightl"]}></div>
      </div>
    </div>
  </div>
);

export default Card_shake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_shake = () => (
         <div>
          <div className="outer">
  <div className="dot"></div>
  <div className="card">
    <div className="ray"></div>
    <div className="text">750k</div>
    <div>Views</div>
    <div className="line topl"></div>
    <div className="line leftl"></div>
    <div className="line bottoml"></div>
    <div className="line rightl"></div>
  </div>
</div>
        </div>
        );

        export default Card_shake;
        
        
         */
}

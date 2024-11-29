import React from "react";
import styles from "./Card_bean.module.css";

const Card_bean = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["container_terminal"]}></div>
      <div className={styles["terminal_toolbar"]}>
        <div className={styles["butt"]}>
          <button className={styles["btn"] + styles["btn-color"]}></button>
          <button className={styles["btn"]}></button>
          <button className={styles["btn"]}></button>
        </div>
        <p className={styles["user"]}>johndoe@admin: ~</p>
      </div>
      <div className={styles["terminal_body"]}>
        <div className={styles["terminal_promt"]}>
          <span className={styles["terminal_user"]}>johndoe@admin:</span>
          <span className={styles["terminal_location"]}>~</span>
          <span className={styles["terminal_bling"]}>$</span>
          <span className={styles["terminal_cursor"]}></span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_bean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bean = () => (
         <div>
          <div className="container">
    <div className="container_terminal"></div>
    <div className="terminal_toolbar">
        <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
        </div>
        <p className="user">johndoe@admin: ~</p>
    </div>
    <div className="terminal_body">
        <div className="terminal_promt">
            <span className="terminal_user">johndoe@admin:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_cursor"></span>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_bean;
        
        
         */
}

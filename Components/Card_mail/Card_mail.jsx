import React from "react";
import styles from "./Card_mail.module.css";

const Card_mail = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["img"]}></div>
        <div className={styles["details"]}>
          <span className={styles["name"]}></span>
          <span className={styles["about"]}></span>
        </div>
      </div>
      <div className={styles["description"]}>
        <div className={styles["line"] + styles["line-1"]}></div>
        <div className={styles["line"] + styles["line-2"]}></div>
        <div className={styles["line"] + styles["line-3"]}></div>
      </div>
      <div className={styles["btns"]}>
        <div className={styles["btn"] + styles["btn-1"]}></div>
        <div className={styles["btn"] + styles["btn-2"]}></div>
      </div>
    </div>
  </div>
);

export default Card_mail;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mail = () => (
         <div>
          <div className="card">
  <div className="header">
    <div className="img"></div>
    <div className="details">
      <span className="name"></span>
      <span className="about"></span>
    </div>
  </div>
  <div className="description">
    <div className="line line-1"></div>
    <div className="line line-2"></div>
    <div className="line line-3"></div>
  </div>
  <div className="btns">
    <div className="btn btn-1"></div>
    <div className="btn btn-2"></div>
  </div>
</div>
        </div>
        );

        export default Card_mail;
        
        
         */
}

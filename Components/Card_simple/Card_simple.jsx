import React from "react";
import styles from "./Card_simple.module.css";

const Card_simple = () => (
  <div>
    <div className={styles["letter-image"]}>
      <div className={styles["animated-mail"]}>
        <div className={styles["back-fold"]}></div>
        <div className={styles["letter"]}>
          <div className={styles["letter-border"]}></div>
          <div className={styles["letter-title"]}></div>
          <div className={styles["letter-context"]}></div>
          <div className={styles["letter-stamp"]}>
            <div className={styles["letter-stamp-inner"]}></div>
          </div>
        </div>
        <div className={styles["top-fold"]}></div>
        <div className={styles["body"]}></div>
        <div className={styles["left-fold"]}></div>
      </div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Card_simple;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_simple = () => (
         <div>
          <div className="letter-image">
  <div className="animated-mail">
    <div className="back-fold"></div>
    <div className="letter">
      <div className="letter-border"></div>
      <div className="letter-title"></div>
      <div className="letter-context"></div>
      <div className="letter-stamp">
        <div className="letter-stamp-inner"></div>
      </div>
    </div>
    <div className="top-fold"></div>
    <div className="body"></div>
    <div className="left-fold"></div>
  </div>
  <div className="shadow"></div>
</div>
        </div>
        );

        export default Card_simple;
        
        
         */
}

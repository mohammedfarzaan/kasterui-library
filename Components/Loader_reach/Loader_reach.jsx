import React from "react";
import styles from "./Loader_reach.module.css";

const Loader_reach = () => (
  <div>
    <div className={styles["rocket"]}>
      <div className={styles["rocket-body"]}>
        <div className={styles["body"]}></div>
        <div className={styles["fin"] + styles["fin-left"]}></div>
        <div className={styles["fin"] + styles["fin-right"]}></div>
        <div className={styles["window"]}></div>
      </div>
      <div className={styles["exhaust-flame"]}></div>
      <ul className={styles["exhaust-fumes"]}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className={styles["star"]}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
);

export default Loader_reach;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_reach = () => (
         <div>
          <div className="rocket">
    <div className="rocket-body">
      <div className="body"></div>
      <div className="fin fin-left"></div>
      <div className="fin fin-right"></div>
      <div className="window"></div>
    </div>
    <div className="exhaust-flame"></div>
    <ul className="exhaust-fumes">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul className="star">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
        </div>
        );

        export default Loader_reach;
        
        
         */
}

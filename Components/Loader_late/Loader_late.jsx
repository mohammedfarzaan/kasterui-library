import React from "react";
import styles from "./Loader_late.module.css";

const Loader_late = () => (
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

export default Loader_late;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_late = () => (
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

        export default Loader_late;
        
        
         */
}

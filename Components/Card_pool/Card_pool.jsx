import React from "react";
import styles from "./Card_pool.module.css";

const Card_pool = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["skill-box"]}>
        <span className={styles["title"]}>HTML</span>

        <div className={styles["skill-bar"]}>
          <span className={styles["skill-per"] + styles["html"]}>
            <span className={styles["tooltip"]}>50%</span>
          </span>
        </div>
      </div>

      <div className={styles["skill-box"]}>
        <span className={styles["title"]}>CSS</span>

        <div className={styles["skill-bar"]}>
          <span className={styles["skill-per"] + styles["css"]}>
            <span className={styles["tooltip"]}>70%</span>
          </span>
        </div>
      </div>
      <div className={styles["skill-box"]}>
        <span className={styles["title"]}>JavaScript</span>

        <div className={styles["skill-bar"]}>
          <span className={styles["skill-per"] + styles["javascript"]}>
            <span className={styles["tooltip"]}>50%</span>
          </span>
        </div>
      </div>
      <div className={styles["skill-box"]}>
        <span className={styles["title"]}>NodeJS</span>

        <div className={styles["skill-bar"]}>
          <span className={styles["skill-per"] + styles["nodejs"]}>
            <span className={styles["tooltip"]}>30%</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_pool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pool = () => (
         <div>
          <div className="container">
        <div className="skill-box">
            <span className="title">HTML</span>

            <div className="skill-bar">
                <span className="skill-per html">
                    <span className="tooltip">50%</span>
                </span>
            </div>
        </div>

        <div className="skill-box">
            <span className="title">CSS</span>

            <div className="skill-bar">
                <span className="skill-per css">
                    <span className="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className="title">JavaScript</span>

            <div className="skill-bar">
                <span className="skill-per javascript">
                    <span className="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className="title">NodeJS</span>

            <div className="skill-bar">
                <span className="skill-per nodejs">
                    <span className="tooltip">30%</span>
                </span>
            </div>
        </div>
    </div>
        </div>
        );

        export default Card_pool;
        
        
         */
}

import React from "react";
import styles from "./Card_advice.module.css";

const Card_advice = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>My Skills</div>
      <div className={styles["body"]}>
        <div className={styles["skill"]}>
          <div className={styles["skill-name"]}>HTML</div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-percent"]} style="width: 90%"></div>
          </div>
          <div className={styles["skill-percent-number"]}>90%</div>
        </div>
        <div className={styles["skill"]}>
          <div className={styles["skill-name"]}>CSS</div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-percent"]} style="width: 80%"></div>
          </div>
          <div className={styles["skill-percent-number"]}>80%</div>
        </div>
        <div className={styles["skill"]}>
          <div className={styles["skill-name"]}>JavaScript</div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-percent"]} style="width: 75%"></div>
          </div>
          <div className={styles["skill-percent-number"]}>75%</div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_advice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_advice = () => (
         <div>
          <div className="card">
  <div className="header">My Skills</div>
  <div className="body">
    <div className="skill">
      <div className="skill-name">HTML</div>
      <div className="skill-level">
        <div className="skill-percent" style="width: 90%"></div>
      </div>
      <div className="skill-percent-number">90%</div>
    </div>
    <div className="skill">
      <div className="skill-name">CSS</div>
      <div className="skill-level">
        <div className="skill-percent" style="width: 80%"></div>
      </div>
      <div className="skill-percent-number">80%</div>
    </div>
    <div className="skill">
      <div className="skill-name">JavaScript</div>
      <div className="skill-level">
        <div className="skill-percent" style="width: 75%"></div>
      </div>
      <div className="skill-percent-number">75%</div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_advice;
        
        
         */
}

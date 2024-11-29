import React from "react";
import styles from "./Card_indeed.module.css";

const Card_indeed = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["deg"]}>
        <span>Rain</span>
        <p className={styles["number"]}>
          21
          <span>0</span>
        </p>
      </div>
      <div className={styles["date"]}>
        <p>Monday,22 October Saigon</p>
      </div>
      <div className={styles["rain"]}>
        <div className={styles["block"]}>
          <div className={styles["drop"]}></div>
          <div className={styles["drop"]}></div>
        </div>
        <div className={styles["block"]}>
          <div className={styles["drop"]}></div>
          <div className={styles["drop"]}></div>
        </div>
        <div className={styles["block"]}>
          <div className={styles["drop"]}></div>
          <div className={styles["drop"]}></div>
        </div>
        <div className={styles["block"]}>
          <div className={styles["drop"]}></div>
          <div className={styles["drop"]}></div>
        </div>
        <div className={styles["block"]}>
          <div className={styles["drop"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_indeed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_indeed = () => (
         <div>
          <div className="card">
  <div className="deg">
    <span>Rain</span>
    <p className="number">
      21
      <span>0</span>
    </p>
  </div>
  <div className="date">
    <p>Monday,22 October Saigon</p>
  </div>
  <div className="rain">
    <div className="block">
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
    <div className="block">
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
    <div className="block">
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
    <div className="block">
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
    <div className="block">
      <div className="drop"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_indeed;
        
        
         */
}

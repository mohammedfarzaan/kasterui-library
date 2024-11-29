import React from "react";
import styles from "./Card_along.module.css";

const Card_along = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["card"]}>
        <div className={styles["ups"]}>
          <div className={styles["screw1"]}>+</div>
          <div className={styles["screw2"]}>+</div>
        </div>
        <div className={styles["card1"]}>
          <div className={styles["line1"]}></div>
          <div className={styles["line2"]}></div>
          <div className={styles["yl"]}>
            <div className={styles["roll"]}>
              <div className={styles["s_wheel"]}></div>
              <div className={styles["tape"]}></div>
              <div className={styles["e_wheel"]}></div>
            </div>
            <p className={styles["num"]}>90</p>
          </div>
          <div className={styles["or"]}>
            <p className={styles["time"]}>2×30min</p>
          </div>
        </div>
        <div className={styles["card2_main"]}>
          <div className={styles["card2"]}>
            <div className={styles["c1"]}></div>
            <div className={styles["t1"]}></div>
            <div className={styles["screw5"]}>+</div>
            <div className={styles["t2"]}></div>
            <div className={styles["c2"]}></div>
          </div>
        </div>
        <div className={styles["downs"]}>
          <div className={styles["screw3"]}>+</div>
          <div className={styles["screw4"]}>+</div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_along;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_along = () => (
         <div>
          <div className="main">
  <div className="card">
    <div className="ups">
      <div className="screw1">+</div>
      <div className="screw2">+</div>
    </div>
    <div className="card1">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="yl">
        <div className="roll">
          <div className="s_wheel"></div>
          <div className="tape"></div>
          <div className="e_wheel"></div>
        </div>
        <p className="num">90</p>
      </div>
      <div className="or">
        <p className="time">2×30min</p>
      </div>
    </div>
    <div className="card2_main">
      <div className="card2">
        <div className="c1"></div>
        <div className="t1"></div>
        <div className="screw5">+</div>
        <div className="t2"></div>
        <div className="c2"></div>
      </div>
    </div>
    <div className="downs">
      <div className="screw3">+</div>
      <div className="screw4">+</div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_along;
        
        
         */
}

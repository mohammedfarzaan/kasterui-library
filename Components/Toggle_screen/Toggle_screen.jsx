import React from "react";
import styles from "./Toggle_screen.module.css";

const Toggle_screen = () => (
  <div>
    <div className={styles["toggleWrapper"]}>
      <input type="checkbox" className={styles["dn"]} id="dn" />
      <label for="dn" className={styles["toggle"]}>
        <span className={styles["toggle__handler"]}>
          <span className={styles["crater"] + styles["crater--1"]}></span>
          <span className={styles["crater"] + styles["crater--2"]}></span>
          <span className={styles["crater"] + styles["crater--3"]}></span>
        </span>
        <span className={styles["star"] + styles["star--1"]}></span>
        <span className={styles["star"] + styles["star--2"]}></span>
        <span className={styles["star"] + styles["star--3"]}></span>
        <span className={styles["star"] + styles["star--4"]}></span>
        <span className={styles["star"] + styles["star--5"]}></span>
        <span className={styles["star"] + styles["star--6"]}></span>
      </label>
    </div>
  </div>
);

export default Toggle_screen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_screen = () => (
         <div>
          <div className="toggleWrapper">
    <input type="checkbox" className="dn" id="dn" />
    <label for="dn" className="toggle">
        <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
    </label>
</div>
        </div>
        );

        export default Toggle_screen;
        
        
         */
}

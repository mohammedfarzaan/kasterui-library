import React from "react";
import styles from "./Button_wool.module.css";

const Button_wool = () => (
  <div>
    <button>
      <div className={styles["main"]}>
        <div className={styles["rings"]} id="ring1"></div>
        <div className={styles["rings"]} id="ring2"></div>
        <div className={styles["asteriods-large"]} id="asteriod1"></div>
        <div className={styles["asteriods-large"]} id="asteriod2"></div>
        <div className={styles["asteriods-large"]} id="asteriod3"></div>
        <div className={styles["asteriods-large"]} id="asteriod4"></div>
        <div className={styles["asteriods-large"]} id="asteriod5"></div>
        <div className={styles["asteriods-small"]} id="asteriod6"></div>
        <div className={styles["asteriods-small"]} id="asteriod7"></div>
        <div className={styles["asteriods-small"]} id="asteriod8"></div>
        <div className={styles["asteriods-small"]} id="asteriod9"></div>
        <div className={styles["asteriods-small"]} id="asteriod10"></div>
        <div id="saturn"></div>
        <div id="explore">Explore</div>
      </div>
    </button>
  </div>
);

export default Button_wool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wool = () => (
         <div>
          <button>
  <div className="main">
    <div className="rings" id="ring1"></div>
    <div className="rings" id="ring2"></div>
    <div className="asteriods-large" id="asteriod1"></div>
    <div className="asteriods-large" id="asteriod2"></div>
    <div className="asteriods-large" id="asteriod3"></div>
    <div className="asteriods-large" id="asteriod4"></div>
    <div className="asteriods-large" id="asteriod5"></div>
    <div className="asteriods-small" id="asteriod6"></div>
    <div className="asteriods-small" id="asteriod7"></div>
    <div className="asteriods-small" id="asteriod8"></div>
    <div className="asteriods-small" id="asteriod9"></div>
    <div className="asteriods-small" id="asteriod10"></div>
    <div id="saturn"></div>
    <div id="explore">Explore</div>

  </div>
</button>
        </div>
        );

        export default Button_wool;
        
        
         */
}

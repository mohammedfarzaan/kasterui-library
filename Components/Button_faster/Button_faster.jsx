import React from "react";
import styles from "./Button_faster.module.css";

const Button_faster = () => (
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

export default Button_faster;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_faster = () => (
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

        export default Button_faster;
        
        
         */
}

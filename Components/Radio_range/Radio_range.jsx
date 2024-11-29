import React from "react";
import styles from "./Radio_range.module.css";

const Radio_range = () => (
  <div>
    <div className={styles["main"]}>
      <label className={styles["switch"]}>
        <input type="radio" name="value-radio" />
        <div className={styles["button"]}>
          <div className={styles["light"]}></div>
          <div className={styles["dots"]}></div>
        </div>
      </label>
      <label className={styles["switch1"]}>
        <input type="radio" checked="" name="value-radio" />
        <div className={styles["button"]}>
          <div className={styles["light"]}></div>
          <div className={styles["dots"]}></div>
        </div>
      </label>
      <label className={styles["switch2"]}>
        <input type="radio" name="value-radio" />
        <div className={styles["button"]}>
          <div className={styles["light"]}></div>
          <div className={styles["dots"]}></div>
        </div>
      </label>
      <div className={styles["back"]}></div>
    </div>
  </div>
);

export default Radio_range;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_range = () => (
         <div>
          <div className="main">
<label className="switch">
  <input type="radio" name="value-radio" />
  <div className="button">
    <div className="light"></div>
    <div className="dots"></div>
  </div>
</label>
<label className="switch1">
  <input type="radio" checked="" name="value-radio" />
  <div className="button">
    <div className="light"></div>
    <div className="dots"></div>
  </div>
</label>
<label className="switch2">
  <input type="radio" name="value-radio" />
  <div className="button">
    <div className="light"></div>
    <div className="dots"></div>
  </div>
</label>
<div className="back"></div>
</div>
        </div>
        );

        export default Radio_range;
        
        
         */
}

import React from "react";
import styles from "./Radio_home.module.css";

const Radio_home = () => (
  <div>
    <div className={styles["radio-container"]}>
      <div className={styles["radio-wrapper"]}>
        <label className={styles["radio-button"]}>
          <input id="option1" name="radio-group" type="radio" />
          <span className={styles["radio-checkmark"]}></span>
          <span className={styles["radio-label"]}>Male</span>
        </label>
      </div>

      <div className={styles["radio-wrapper"]}>
        <label className={styles["radio-button"]}>
          <input id="option2" name="radio-group" type="radio" />
          <span className={styles["radio-checkmark"]}></span>
          <span className={styles["radio-label"]}>Female</span>
        </label>
      </div>

      <div className={styles["radio-wrapper"]}>
        <label className={styles["radio-button"]}>
          <input id="option3" name="radio-group" type="radio" />
          <span className={styles["radio-checkmark"]}></span>
          <span className={styles["radio-label"]}>Other</span>
        </label>
      </div>
    </div>
  </div>
);

export default Radio_home;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_home = () => (
         <div>
          <div className="radio-container">
  <div className="radio-wrapper">
    <label className="radio-button">
      <input id="option1" name="radio-group" type="radio" />
      <span className="radio-checkmark"></span>
      <span className="radio-label">Male</span>
    </label>
  </div>

  <div className="radio-wrapper">
    <label className="radio-button">
      <input id="option2" name="radio-group" type="radio" />
      <span className="radio-checkmark"></span>
      <span className="radio-label">Female</span>
    </label>
  </div>

  <div className="radio-wrapper">
    <label className="radio-button">
      <input id="option3" name="radio-group" type="radio" />
      <span className="radio-checkmark"></span>
      <span className="radio-label">Other</span>
    </label>
  </div>
</div>
        </div>
        );

        export default Radio_home;
        
        
         */
}

import React from "react";
import styles from "./Radio_past.module.css";

const Radio_past = () => (
  <div>
    <div className={styles["radio-button-container"]}>
      <div className={styles["radio-button"]}>
        <input
          type="radio"
          className={styles["radio-button__input"]}
          id="radio1"
          name="radio-group"
        />
        <label className={styles["radio-button__label"]} for="radio1">
          <span className={styles["radio-button__custom"]}></span>
          React
        </label>
      </div>
      <div className={styles["radio-button"]}>
        <input
          type="radio"
          className={styles["radio-button__input"]}
          id="radio2"
          name="radio-group"
        />
        <label className={styles["radio-button__label"]} for="radio2">
          <span className={styles["radio-button__custom"]}></span>
          Angular
        </label>
      </div>
      <div className={styles["radio-button"]}>
        <input
          type="radio"
          className={styles["radio-button__input"]}
          id="radio3"
          name="radio-group"
        />
        <label className={styles["radio-button__label"]} for="radio3">
          <span className={styles["radio-button__custom"]}></span>
          Vue
        </label>
      </div>
    </div>
  </div>
);

export default Radio_past;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_past = () => (
         <div>
          <div className="radio-button-container">
  <div className="radio-button">
  <input type="radio" className="radio-button__input" id="radio1" name="radio-group" />
  <label className="radio-button__label" for="radio1">
    <span className="radio-button__custom"></span>
    React
  </label>
</div>
<div className="radio-button">
  <input type="radio" className="radio-button__input" id="radio2" name="radio-group" />
  <label className="radio-button__label" for="radio2">
    <span className="radio-button__custom"></span>
    Angular
  </label>
</div>
<div className="radio-button">
  <input type="radio" className="radio-button__input" id="radio3" name="radio-group" />
  <label className="radio-button__label" for="radio3">
    <span className="radio-button__custom"></span>
    Vue
  </label>
</div>
</div>
        </div>
        );

        export default Radio_past;
        
        
         */
}

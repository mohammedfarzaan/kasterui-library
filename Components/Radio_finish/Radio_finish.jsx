import React from "react";
import styles from "./Radio_finish.module.css";

const Radio_finish = () => (
  <div>
    <div className={styles["radio-group"]}>
      <label className={styles["radio-button"]}>
        <input type="radio" name="radio" value="option1" />
        <svg className={styles["radio-icon"]} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
        <div className={styles["radio-text"]}>Option 1</div>
      </label>
      <label className={styles["radio-button"]}>
        <input type="radio" name="radio" value="option2" />
        <svg className={styles["radio-icon"]} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
        <div className={styles["radio-text"]}>Option 2</div>
      </label>
      <label className={styles["radio-button"]}>
        <input type="radio" name="radio" value="option3" />
        <svg className={styles["radio-icon"]} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
        <div className={styles["radio-text"]}>Option 3</div>
      </label>
    </div>
  </div>
);

export default Radio_finish;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_finish = () => (
         <div>
          <div className="radio-group">
  <label className="radio-button">
    <input type="radio" name="radio" value="option1" />
    <svg className="radio-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8"></circle>
      <circle cx="12" cy="12" r="5"></circle>
    </svg>
    <div className="radio-text">Option 1</div>
  </label>
  <label className="radio-button">
    <input type="radio" name="radio" value="option2" />
    <svg className="radio-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8"></circle>
      <circle cx="12" cy="12" r="5"></circle>
    </svg>
    <div className="radio-text">Option 2</div>
  </label>
  <label className="radio-button">
    <input type="radio" name="radio" value="option3" />
    <svg className="radio-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8"></circle>
      <circle cx="12" cy="12" r="5"></circle>
    </svg>
    <div className="radio-text">Option 3</div>
  </label>
</div>
        </div>
        );

        export default Radio_finish;
        
        
         */
}

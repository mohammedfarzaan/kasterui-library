import React from "react";
import styles from "./Radio_depth.module.css";

const Radio_depth = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["custom-radio"]}>
        <input type="radio" id="radio-1" name="tabs" checked="" />
        <label className={styles["radio-label"]} for="radio-1">
          <div className={styles["radio-circle"]}></div>
          <span className={styles["radio-text"]}>Option 1</span>
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className={styles["radio-label"]} for="radio-2">
          <div className={styles["radio-circle"]}></div>
          <span className={styles["radio-text"]}>Option 2</span>
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label className={styles["radio-label"]} for="radio-3">
          <div className={styles["radio-circle"]}></div>
          <span className={styles["radio-text"]}>Option 3</span>
        </label>
      </div>
    </div>
  </div>
);

export default Radio_depth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_depth = () => (
         <div>
          <div className="container">
  <div className="custom-radio">
    <input type="radio" id="radio-1" name="tabs" checked="" />
    <label className="radio-label" for="radio-1">
      <div className="radio-circle"></div>
      <span className="radio-text">Option 1</span>
    </label>
    <input type="radio" id="radio-2" name="tabs" />
    <label className="radio-label" for="radio-2">
      <div className="radio-circle"></div>
      <span className="radio-text">Option 2</span>
    </label>
    <input type="radio" id="radio-3" name="tabs" />
    <label className="radio-label" for="radio-3">
      <div className="radio-circle"></div>
      <span className="radio-text">Option 3</span>
    </label>
  </div>
</div>
        </div>
        );

        export default Radio_depth;
        
        
         */
}

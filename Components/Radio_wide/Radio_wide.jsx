import React from "react";
import styles from "./Radio_wide.module.css";

const Radio_wide = () => (
  <div>
    <div className={styles["radio-group"]}>
      <input
        className={styles["radio-input"]}
        name="radio-group"
        id="radio1"
        type="radio"
      />
      <label className={styles["radio-label"]} for="radio1">
        <span className={styles["radio-inner-circle"]}></span>
        Option 1
      </label>

      <input
        className={styles["radio-input"]}
        name="radio-group"
        id="radio2"
        type="radio"
      />
      <label className={styles["radio-label"]} for="radio2">
        <span className={styles["radio-inner-circle"]}></span>
        Option 2
      </label>

      <input
        className={styles["radio-input"]}
        name="radio-group"
        id="radio3"
        type="radio"
      />
      <label className={styles["radio-label"]} for="radio3">
        <span className={styles["radio-inner-circle"]}></span>
        Option 3
      </label>
    </div>
  </div>
);

export default Radio_wide;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_wide = () => (
         <div>
          <div className="radio-group">
    <input className="radio-input" name="radio-group" id="radio1" type="radio" />
    <label className="radio-label" for="radio1">
      <span className="radio-inner-circle"></span>
      Option 1
    </label>
    
    <input className="radio-input" name="radio-group" id="radio2" type="radio" />
    <label className="radio-label" for="radio2">
      <span className="radio-inner-circle"></span>
      Option 2
    </label>
    
    <input className="radio-input" name="radio-group" id="radio3" type="radio" />
    <label className="radio-label" for="radio3">
      <span className="radio-inner-circle"></span>
      Option 3
    </label>
  </div>
        </div>
        );

        export default Radio_wide;
        
        
         */
}

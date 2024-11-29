import React from "react";
import styles from "./Radio_become.module.css";

const Radio_become = () => (
  <div>
    <div className={styles["custom-radio-group"]}>
      <label className={styles["custom-radio-container"]}>
        <input type="radio" name="custom-radio" value="option1" />
        <span className={styles["custom-radio-checkmark"]}></span>
        Option 1
      </label>
      <label className={styles["custom-radio-container"]}>
        <input type="radio" name="custom-radio" value="option2" />
        <span className={styles["custom-radio-checkmark"]}></span>
        Option 2
      </label>
      <label className={styles["custom-radio-container"]}>
        <input type="radio" name="custom-radio" value="option3" />
        <span className={styles["custom-radio-checkmark"]}></span>
        Option 3
      </label>
    </div>
  </div>
);

export default Radio_become;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_become = () => (
         <div>
          <div className="custom-radio-group">
  <label className="custom-radio-container">
    <input type="radio" name="custom-radio" value="option1" />
    <span className="custom-radio-checkmark"></span>
    Option 1
  </label>
  <label className="custom-radio-container">
    <input type="radio" name="custom-radio" value="option2" />
    <span className="custom-radio-checkmark"></span>
    Option 2
  </label>
  <label className="custom-radio-container">
    <input type="radio" name="custom-radio" value="option3" />
    <span className="custom-radio-checkmark"></span>
    Option 3
  </label>
</div>
        </div>
        );

        export default Radio_become;
        
        
         */
}

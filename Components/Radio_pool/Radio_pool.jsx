import React from "react";
import styles from "./Radio_pool.module.css";

const Radio_pool = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label className={styles["radio-compont"]}>
        <input
          type="radio"
          id="value-1"
          className={styles["radiostyle"]}
          name="value-radio"
          value="value-1"
        />
        <div className={styles["radio-text"]}>Option 1</div>
      </label>
      <label className={styles["radio-compont"]}>
        <input
          type="radio"
          id="value-2"
          className={styles["radiostyle"]}
          name="value-radio"
          value="value-2"
        />
        <div className={styles["radio-text"]}>Option 2</div>
      </label>
      <label className={styles["radio-compont"]}>
        <input
          type="radio"
          id="value-3"
          className={styles["radiostyle"]}
          name="value-radio"
          value="value-3"
        />
        <div className={styles["radio-text"]}>Option 3</div>
      </label>
    </div>
  </div>
);

export default Radio_pool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_pool = () => (
         <div>
          <div className="radio-input">
  <label className="radio-compont">
      <input type="radio" id="value-1" className="radiostyle" name="value-radio" value="value-1" />
          <div className="radio-text">Option 1</div>
  </label>
  <label className="radio-compont">
      <input type="radio" id="value-2" className="radiostyle" name="value-radio" value="value-2" />
        <div className="radio-text">Option 2</div>
  </label>
  <label className="radio-compont">
      <input type="radio" id="value-3" className="radiostyle" name="value-radio" value="value-3" />
        <div className="radio-text">Option 3</div>
  </label>
</div>
        </div>
        );

        export default Radio_pool;
        
        
         */
}

import React from "react";
import styles from "./Radio_read.module.css";

const Radio_read = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label className={styles["label"]}>
        <input
          type="radio"
          id="value-1"
          checked=""
          name="value-radio"
          value="value-1"
        />
        <p className={styles["text"]}>Designer</p>
      </label>
      <label className={styles["label"]}>
        <input type="radio" id="value-2" name="value-radio" value="value-2" />
        <p className={styles["text"]}>Student</p>
      </label>
      <label className={styles["label"]}>
        <input type="radio" id="value-3" name="value-radio" value="value-3" />
        <p className={styles["text"]}>Teacher</p>
      </label>
    </div>
  </div>
);

export default Radio_read;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_read = () => (
         <div>
          <div className="radio-input">
  <label className="label">
    <input
      type="radio"
      id="value-1"
      checked=""
      name="value-radio"
      value="value-1"
    />
    <p className="text">Designer</p>
  </label>
  <label className="label">
    <input type="radio" id="value-2" name="value-radio" value="value-2" />
    <p className="text">Student</p>
  </label>
  <label className="label">
    <input type="radio" id="value-3" name="value-radio" value="value-3" />
    <p className="text">Teacher</p>
  </label>
</div>
        </div>
        );

        export default Radio_read;
        
        
         */
}

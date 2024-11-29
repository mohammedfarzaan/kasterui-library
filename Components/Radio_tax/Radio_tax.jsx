import React from "react";
import styles from "./Radio_tax.module.css";

const Radio_tax = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label className={styles["label"]}>
        <input type="radio" name="radio" checked="" />
        <span className={styles["check"]}></span>
      </label>
      <label className={styles["label"]}>
        <input type="radio" name="radio" />
        <span className={styles["check"]}></span>
      </label>

      <label className={styles["label"]}>
        <input type="radio" name="radio" />
        <span className={styles["check"]}></span>
      </label>
    </div>
  </div>
);

export default Radio_tax;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_tax = () => (
         <div>
          <div className="radio-input">
  <label className="label">
    <input type="radio" name="radio" checked="" />
    <span className="check"></span>
  </label>
  <label className="label">
    <input type="radio" name="radio" />
    <span className="check"></span>
  </label>
      
  <label className="label">
    <input type="radio" name="radio" />
    <span className="check"></span>
  </label>
</div>
        </div>
        );

        export default Radio_tax;
        
        
         */
}

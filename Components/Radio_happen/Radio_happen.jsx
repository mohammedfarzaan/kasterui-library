import React from "react";
import styles from "./Radio_happen.module.css";

const Radio_happen = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input value="value-1" name="value-radio" id="value-1" type="radio" />
      <label for="value-1">
        <div className={styles["text"]}>
          <span className={styles["circle"]}></span>
          Monthly
        </div>
        <div className={styles["price"]}>
          <span>$30/mo</span>
          <span className={styles["small"]}>$30 billed every month</span>
        </div>{" "}
      </label>
      <input value="value-2" name="value-radio" id="value-2" type="radio" />
      <label for="value-2">
        <div className={styles["text"]}>
          <span className={styles["circle"]}></span>
          Annualy
        </div>
        <div className={styles["price"]}>
          <span>$15/mo</span>
          <span className={styles["small"]}>$180 billed once a year</span>
        </div>
        <span className={styles["info"]}>save up to 50%</span>
      </label>
    </div>
  </div>
);

export default Radio_happen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_happen = () => (
         <div>
          <div className="radio-input">
  <input value="value-1" name="value-radio" id="value-1" type="radio" />
  <label for="value-1">
    <div className="text">
      <span className="circle"></span>
      Monthly
    </div>
    <div className="price">
      <span>$30/mo</span>
      <span className="small">$30 billed every month</span>
    </div> </label
  ><input value="value-2" name="value-radio" id="value-2" type="radio" />
  <label for="value-2">
    <div className="text">
      <span className="circle"></span>
      Annualy
    </div>
    <div className="price">
      <span>$15/mo</span>
      <span className="small">$180 billed once a year</span>
    </div>
    <span className="info">save up to 50%</span>
  </label>
</div>
        </div>
        );

        export default Radio_happen;
        
        
         */
}

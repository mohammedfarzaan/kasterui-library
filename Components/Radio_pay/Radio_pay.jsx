import React from "react";
import styles from "./Radio_pay.module.css";

const Radio_pay = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input
        className={styles["value-radio"]}
        name="value-radio"
        id="option-1"
        type="radio"
      />
      <label className={styles["value-radio-label"]} for="option-1">
        Option A
      </label>

      <input
        className={styles["value-radio"]}
        name="value-radio"
        id="option-2"
        type="radio"
      />
      <label className={styles["value-radio-label"]} for="option-2">
        Option B
      </label>

      <input
        className={styles["value-radio"]}
        name="value-radio"
        id="option-3"
        type="radio"
      />
      <label className={styles["value-radio-label"]} for="option-3">
        Option C
      </label>
    </div>
  </div>
);

export default Radio_pay;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_pay = () => (
         <div>
          <div className="radio-input">
  <input className="value-radio" name="value-radio" id="option-1" type="radio" />
  <label className="value-radio-label" for="option-1">Option A</label>

  <input className="value-radio" name="value-radio" id="option-2" type="radio" />
  <label className="value-radio-label" for="option-2">Option B</label>
  
  <input className="value-radio" name="value-radio" id="option-3" type="radio" />
  <label className="value-radio-label" for="option-3">Option C</label>

</div>
        </div>
        );

        export default Radio_pay;
        
        
         */
}

import React from "react";
import styles from "./Radio_gift.module.css";

const Radio_gift = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div className={styles["info"]}>
        <span className={styles["question"]}>What does CSS stand for?</span>
        <span className={styles["steps"]}>3/10</span>
      </div>
      <input type="radio" id="value-1" name="value-radio" value="value-1" />
      <label for="value-1">Computer Style Sheets</label>
      <input type="radio" id="value-2" name="value-radio" value="value-2" />
      <label for="value-2">Cascading Style Sheets</label>
      <input type="radio" id="value-3" name="value-radio" value="value-3" />
      <label for="value-3">Creative Style Sheets</label>
      <span className={styles["result"] + styles["success"]}>
        Congratulations!
      </span>
      <span className={styles["result"] + styles["error"]}>Bad answer</span>
    </div>
  </div>
);

export default Radio_gift;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_gift = () => (
         <div>
          <div className="radio-input">
  <div className="info">
  <span className="question">What does CSS stand for?</span>
  <span className="steps">3/10</span>
   </div>
  <input type="radio" id="value-1" name="value-radio" value="value-1" />
  <label for="value-1">Computer Style Sheets</label>
  <input type="radio" id="value-2" name="value-radio" value="value-2" />
  <label for="value-2">Cascading Style Sheets</label>
  <input type="radio" id="value-3" name="value-radio" value="value-3" />
  <label for="value-3">Creative Style Sheets</label>
   <span className="result success">Congratulations!</span>
   <span className="result error">Bad answer</span>
</div>
        </div>
        );

        export default Radio_gift;
        
        
         */
}

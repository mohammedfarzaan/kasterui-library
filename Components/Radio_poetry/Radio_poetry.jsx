import React from "react";
import styles from "./Radio_poetry.module.css";

const Radio_poetry = () => (
  <div>
    <div className={styles["radio-buttons"]}>
      <label className={styles["radio-button"]}>
        <input type="radio" name="option" value="option1" />
        <div className={styles["radio-circle"]}></div>
        <span className={styles["radio-label"]}>Option 1</span>
      </label>
      <label className={styles["radio-button"]}>
        <input type="radio" name="option" value="option2" />
        <div className={styles["radio-circle"]}></div>
        <span className={styles["radio-label"]}>Option 2</span>
      </label>
      <label className={styles["radio-button"]}>
        <input type="radio" name="option" value="option3" />
        <div className={styles["radio-circle"]}></div>
        <span className={styles["radio-label"]}>Option 3</span>
      </label>
    </div>
  </div>
);

export default Radio_poetry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_poetry = () => (
         <div>
          <div className="radio-buttons">
  <label className="radio-button">
    <input type="radio" name="option" value="option1" />
    <div className="radio-circle"></div>
    <span className="radio-label">Option 1</span>
  </label>
  <label className="radio-button">
    <input type="radio" name="option" value="option2" />
    <div className="radio-circle"></div>
    <span className="radio-label">Option 2</span>
  </label>
  <label className="radio-button">
    <input type="radio" name="option" value="option3" />
    <div className="radio-circle"></div>
    <span className="radio-label">Option 3</span>
  </label>
</div>
        </div>
        );

        export default Radio_poetry;
        
        
         */
}

import React from "react";
import styles from "./Radio_middle.module.css";

const Radio_middle = () => (
  <div>
    <div className={styles["radio-buttons"]}>
      <label>
        <input type="radio" name="option" value="1" checked="" />
        <span className={styles["option"]}>Option 1</span>
      </label>
      <label>
        <input type="radio" name="option" value="2" />
        <span className={styles["option"]}>Option 2</span>
      </label>
      <label>
        <input type="radio" name="option" value="3" />
        <span className={styles["option"]}>Option 3</span>
      </label>
    </div>
  </div>
);

export default Radio_middle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_middle = () => (
         <div>
          <div className="radio-buttons">
  <label>
    <input type="radio" name="option" value="1" checked="" />
    <span className="option">Option 1</span>
  </label>
  <label>
    <input type="radio" name="option" value="2" />
    <span className="option">Option 2</span>
  </label>
  <label>
    <input type="radio" name="option" value="3" />
    <span className="option">Option 3</span>
  </label>
</div>
        </div>
        );

        export default Radio_middle;
        
        
         */
}

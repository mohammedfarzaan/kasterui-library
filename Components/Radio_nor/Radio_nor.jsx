import React from "react";
import styles from "./Radio_nor.module.css";

const Radio_nor = () => (
  <div>
    <label className={styles["radio-button"]}>
      <input type="radio" name="example-radio" value="option1" />
      <span className={styles["radio"]}></span>
      Option 1
    </label>

    <label className={styles["radio-button"]}>
      <input type="radio" name="example-radio" value="option2" />
      <span className={styles["radio"]}></span>
      Option 2
    </label>
  </div>
);

export default Radio_nor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_nor = () => (
         <div>
          <label className="radio-button">
  <input type="radio" name="example-radio" value="option1" />
  <span className="radio"></span>
  Option 1
</label>

<label className="radio-button">
  <input type="radio" name="example-radio" value="option2" />
  <span className="radio"></span>
  Option 2
</label>
        </div>
        );

        export default Radio_nor;
        
        
         */
}

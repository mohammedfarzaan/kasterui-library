import React from "react";
import styles from "./Radio_shine.module.css";

const Radio_shine = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input value="value-1" name="value-radio" id="value-1" type="radio" />
      <label for="value-1"></label>
      <input value="value-2" name="value-radio" id="value-2" type="radio" />
      <label for="value-2"></label>
      <input value="value-3" name="value-radio" id="value-3" type="radio" />
      <label for="value-3"></label>
    </div>
  </div>
);

export default Radio_shine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_shine = () => (
         <div>
          <div className="radio-input">
  <input value="value-1" name="value-radio" id="value-1" type="radio" />
  <label for="value-1"></label>
  <input value="value-2" name="value-radio" id="value-2" type="radio" />
  <label for="value-2"></label>
  <input value="value-3" name="value-radio" id="value-3" type="radio" />
  <label for="value-3"></label>
</div>
        </div>
        );

        export default Radio_shine;
        
        
         */
}

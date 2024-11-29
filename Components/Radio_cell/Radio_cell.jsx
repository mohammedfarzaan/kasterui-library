import React from "react";
import styles from "./Radio_cell.module.css";

const Radio_cell = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input value="value-1" name="value-radio" id="value-1" type="radio" />
      <label for="value-1">Value 1</label>
      <input value="value-2" name="value-radio" id="value-2" type="radio" />
      <label for="value-2">Value 2</label>
      <input value="value-3" name="value-radio" id="value-3" type="radio" />
      <label for="value-3">Value 3</label>
    </div>
  </div>
);

export default Radio_cell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_cell = () => (
         <div>
          <div className="radio-input">
  <input value="value-1" name="value-radio" id="value-1" type="radio" />
  <label for="value-1">Value 1</label>
  <input value="value-2" name="value-radio" id="value-2" type="radio" />
  <label for="value-2">Value 2</label>
  <input value="value-3" name="value-radio" id="value-3" type="radio" />
  <label for="value-3">Value 3</label>
</div>
        </div>
        );

        export default Radio_cell;
        
        
         */
}

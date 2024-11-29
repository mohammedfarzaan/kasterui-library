import React from "react";
import styles from "./Radio_clock.module.css";

const Radio_clock = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label>
        <input type="radio" id="value-1" name="value-radio" value="value-1" />
        <span>Option 1</span>
      </label>
      <label>
        <input type="radio" id="value-2" name="value-radio" value="value-2" />
        <span>Option 2</span>
      </label>
      <label>
        <input type="radio" id="value-3" name="value-radio" value="value-3" />
        <span>Option 3</span>
      </label>
      <span className={styles["selection"]}></span>
    </div>
  </div>
);

export default Radio_clock;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_clock = () => (
         <div>
          <div className="radio-input">
  <label>
  <input type="radio" id="value-1" name="value-radio" value="value-1" />
  <span>Option 1</span>
  </label>
  <label>
    <input type="radio" id="value-2" name="value-radio" value="value-2" />
  <span>Option 2</span>
  </label>
  <label>
    <input type="radio" id="value-3" name="value-radio" value="value-3" />
  <span>Option 3</span>
  </label>
  <span className="selection"></span>
</div>
        </div>
        );

        export default Radio_clock;
        
        
         */
}

import React from "react";
import styles from "./Radio_garage.module.css";

const Radio_garage = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div className={styles["container"]}>
        <label>
          <input
            value="value-1"
            name="value-radio"
            checked=""
            id="value-1"
            type="radio"
          />
          <div className={styles["loader"]}></div>
        </label>
        <label>
          <input value="value-2" name="value-radio" id="value-2" type="radio" />
          <div className={styles["loader"]}></div>
        </label>
        <label>
          <input value="value-3" name="value-radio" id="value-3" type="radio" />
          <div className={styles["loader"]}></div>
        </label>
      </div>
    </div>
  </div>
);

export default Radio_garage;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_garage = () => (
         <div>
          <div className="radio-input">
  <div className="container">
    <label>
      <input value="value-1" name="value-radio" checked="" id="value-1" type="radio" />
      <div className="loader"></div>
    </label>
    <label>
      <input value="value-2" name="value-radio" id="value-2" type="radio" />
      <div className="loader"></div>
    </label>
    <label>
      <input value="value-3" name="value-radio" id="value-3" type="radio" />
      <div className="loader"></div>
    </label>
 </div>
</div>
        </div>
        );

        export default Radio_garage;
        
        
         */
}

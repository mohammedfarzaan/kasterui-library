import React from "react";
import styles from "./Radio_climb.module.css";

const Radio_climb = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input value="value-1" name="value-radio" id="value-1" type="radio" />
      <div className={styles["plus1"]}>
        <div className={styles["plus2"]}></div>
      </div>
      <input
        value="value-2"
        name="value-radio"
        id="value-2"
        type="radio"
        checked=""
      />
      <div className={styles["plus1"]}>
        <div className={styles["plus2"]}></div>
      </div>
      <input value="value-3" name="value-radio" id="value-3" type="radio" />
      <div className={styles["plus1"]}>
        <div className={styles["plus2"]}></div>
      </div>
    </div>
  </div>
);

export default Radio_climb;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_climb = () => (
         <div>
          <div className="radio-input">
  <input value="value-1" name="value-radio" id="value-1" type="radio" />
  <div className="plus1">
    <div className="plus2"></div>
  </div>
  <input value="value-2" name="value-radio" id="value-2" type="radio" checked="" />
  <div className="plus1">
    <div className="plus2"></div>
  </div>
  <input value="value-3" name="value-radio" id="value-3" type="radio" />
  <div className="plus1">
    <div className="plus2"></div>
  </div>
</div>
        </div>
        );

        export default Radio_climb;
        
        
         */
}

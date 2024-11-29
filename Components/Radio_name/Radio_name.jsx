import React from "react";
import styles from "./Radio_name.module.css";

const Radio_name = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div className={styles["radio"]}>
        <input
          checked=""
          value="value-1"
          name="future"
          id="value-1"
          type="radio"
          className={styles["input"]}
        />
        <label for="value-1">
          <div className={styles["center"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className={styles["top"]}></div>
        <div className={styles["bottom"]}></div>
        <div className={styles["block"]}></div>
      </div>
      <div className={styles["radio"]}>
        <input
          value="value-2"
          name="future"
          id="value-2"
          type="radio"
          className={styles["input"]}
        />
        <label for="value-2">
          <div className={styles["center"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className={styles["top"]}></div>
        <div className={styles["bottom"]}></div>
        <div className={styles["block"]}></div>
      </div>
      <div className={styles["radio"]}>
        <input
          value="value-3"
          name="future"
          id="value-3"
          type="radio"
          className={styles["input"]}
        />
        <label for="value-3">
          <div className={styles["center"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className={styles["top"]}></div>
        <div className={styles["bottom"]}></div>
        <div className={styles["block"]}></div>
      </div>
    </div>
  </div>
);

export default Radio_name;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_name = () => (
         <div>
          <div className="radio-input">
      <div className="radio">
        <input checked="" value="value-1" name="future" id="value-1" type="radio" className="input" />
        <label for="value-1">
          <div className="center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="block"></div>
      </div>
      <div className="radio">
        <input value="value-2" name="future" id="value-2" type="radio" className="input" />
        <label for="value-2">
          <div className="center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="block"></div>
      </div>
      <div className="radio">
        <input value="value-3" name="future" id="value-3" type="radio" className="input" />
        <label for="value-3">
          <div className="center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="block"></div>
      </div>
    </div>
        </div>
        );

        export default Radio_name;
        
        
         */
}

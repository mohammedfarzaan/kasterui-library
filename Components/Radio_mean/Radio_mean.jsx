import React from "react";
import styles from "./Radio_mean.module.css";

const Radio_mean = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div className={styles["glass"]}>
        <div className={styles["glass-inner"]}></div>
      </div>
      <div className={styles["selector"]}>
        <div className={styles["choice"]}>
          <div>
            <input
              className={styles["choice-circle"]}
              checked="true"
              value="one"
              name="number-selector"
              id="one"
              type="radio"
            />
            <div className={styles["ball"]}></div>
          </div>
          <label for="one" className={styles["choice-name"]}>
            1
          </label>
        </div>
        <div className={styles["choice"]}>
          <div>
            <input
              className={styles["choice-circle"]}
              value="two"
              name="number-selector"
              id="two"
              type="radio"
            />
            <div className={styles["ball"]}></div>
          </div>
          <label className={styles["choice-name"]}>2</label>
        </div>
        <div className={styles["choice"]}>
          <div>
            <input
              className={styles["choice-circle"]}
              value="three"
              name="number-selector"
              id="three"
              type="radio"
            />
            <div className={styles["ball"]}></div>
          </div>
          <label for="three" className={styles["choice-name"]}>
            3
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_mean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_mean = () => (
         <div>
          <div className="radio-input">
  <div className="glass">
    <div className="glass-inner">
    </div>
  </div>
  <div className="selector">
    <div className="choice">
      <div>
        <input className="choice-circle" checked="true" value="one" name="number-selector" id="one" type="radio" />
        <div className="ball"></div>
      </div>
      <label for="one" className="choice-name">1</label>
    </div>
    <div className="choice">
      <div>
        <input className="choice-circle" value="two" name="number-selector" id="two" type="radio" />
        <div className="ball"></div>
      </div>
      <label className="choice-name">2</label>
    </div>
    <div className="choice">
      <div>
        <input className="choice-circle" value="three" name="number-selector" id="three" type="radio" />
        <div className="ball"></div>
      </div>
      <label for="three" className="choice-name">3</label>
    </div>
  </div>
</div>
        </div>
        );

        export default Radio_mean;
        
        
         */
}

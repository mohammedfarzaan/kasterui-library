import React from "react";
import styles from "./Radio_copper.module.css";

const Radio_copper = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div className={styles["glass"]}>
        <div className={styles["glass-inner"]}></div>
      </div>
      <div className={styles["selector"]}>
        <div className={styles["choice"]}>
          <div>
            <input
              type="radio"
              id="one"
              name="number-selector"
              value="one"
              checked="true"
              className={styles["choice-circle"]}
            />
            <div className={styles["ball"]}></div>
          </div>
          <label className={styles["choice-name"]} for="one">
            1
          </label>
        </div>
        <div className={styles["choice"]}>
          <div>
            <input
              type="radio"
              id="two"
              name="number-selector"
              value="two"
              className={styles["choice-circle"]}
            />
            <div className={styles["ball"]}></div>
          </div>
          <label className={styles["choice-name"]}>2</label>
        </div>
        <div className={styles["choice"]}>
          <div>
            <input
              type="radio"
              id="three"
              name="number-selector"
              value="three"
              className={styles["choice-circle"]}
            />
            <div className={styles["ball"]}></div>
          </div>
          <label className={styles["choice-name"]} for="three">
            3
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_copper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_copper = () => (
         <div>
          <div className="radio-input">
  <div className="glass">
    <div className="glass-inner">
    </div>
  </div>
  <div className="selector">
    <div className="choice">
      <div>
        <input type="radio" id="one" name="number-selector" value="one" checked="true" className="choice-circle" />
        <div className="ball"></div>
      </div>
      <label className="choice-name" for="one">1</label>
    </div>
    <div className="choice">
      <div>
        <input type="radio" id="two" name="number-selector" value="two" className="choice-circle" />
        <div className="ball"></div>
      </div>
      <label className="choice-name">2</label>
    </div>
    <div className="choice">
      <div>
        <input type="radio" id="three" name="number-selector" value="three" className="choice-circle" />
        <div className="ball"></div>
      </div>
      <label className="choice-name" for="three">3</label>
    </div>
  </div>
</div>
        </div>
        );

        export default Radio_copper;
        
        
         */
}

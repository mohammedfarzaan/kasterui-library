import React from "react";
import styles from "./Radio_wash.module.css";

const Radio_wash = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["fire"]}>
        <label className={styles["label"] + styles["red"]}>
          <input
            type="radio"
            checked="checked"
            name="radio"
            className={styles["input"]}
          />
        </label>
        <label className={styles["label"] + styles["orange"]}>
          <input type="radio" name="radio" className={styles["input"]} />
        </label>
        <label className={styles["label"] + styles["green"]}>
          <input type="radio" name="radio" className={styles["input"]} />
        </label>
        <span className={styles["selection"]}></span>
      </div>
    </div>
  </div>
);

export default Radio_wash;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_wash = () => (
         <div>
          <div className="container">
    <div className="fire">
        <label className="label red">
            <input type="radio" checked="checked" name="radio" className="input" />
        </label>
        <label className="label orange">
            <input type="radio" name="radio" className="input" />
        </label>
        <label className="label green">
            <input type="radio" name="radio" className="input" />
        </label>
        <span className="selection"></span>
    </div>
</div>
        </div>
        );

        export default Radio_wash;
        
        
         */
}

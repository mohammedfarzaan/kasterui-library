import React from "react";
import styles from "./Radio_yellow.module.css";

const Radio_yellow = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["pane"]}>
        <label className={styles["label"]}>
          <span>Yes</span>
          <input
            id="left"
            className={styles["input"]}
            name="radio"
            type="radio"
          />
        </label>
        <label className={styles["label"]}>
          <span>No</span>
          <input
            id="middle"
            className={styles["input"]}
            checked="checked"
            name="radio"
            type="radio"
          />
        </label>
        <label className={styles["label"]}>
          <span>Idk</span>
          <input
            id="right"
            className={styles["input"]}
            name="radio"
            type="radio"
          />
        </label>
        <span className={styles["selection"]}></span>
      </div>
    </div>
  </div>
);

export default Radio_yellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_yellow = () => (
         <div>
          <div className="container">
    <div className="pane">
        <label className="label">
            <span>Yes</span>
            <input id="left" className="input" name="radio" type="radio" />
        </label>
        <label className="label">
            <span>No</span>
            <input id="middle" className="input" checked="checked" name="radio" type="radio" />
        </label>
        <label className="label">
            <span>Idk</span>
            <input id="right" className="input" name="radio" type="radio" />
        </label>
        <span className="selection"></span>
    </div>
</div>
        </div>
        );

        export default Radio_yellow;
        
        
         */
}

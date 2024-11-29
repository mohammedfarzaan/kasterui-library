import React from "react";
import styles from "./Radio_simply.module.css";

const Radio_simply = () => (
  <div>
    <div className={styles["customCheckBoxHolder"]}>
      <input
        className={styles["customCheckBoxInput"]}
        id="cCB1"
        type="checkbox"
      />
      <label className={styles["customCheckBoxWrapper"]} for="cCB1">
        <div className={styles["customCheckBox"]}>
          <div className={styles["inner"]}>Option</div>
        </div>
      </label>

      <input
        className={styles["customCheckBoxInput"]}
        id="cCB2"
        type="checkbox"
      />
      <label className={styles["customCheckBoxWrapper"]} for="cCB2">
        <div className={styles["customCheckBox"]}>
          <div className={styles["inner"]}>Option</div>
        </div>
      </label>

      <input
        className={styles["customCheckBoxInput"]}
        id="cCB3"
        type="checkbox"
      />
      <label className={styles["customCheckBoxWrapper"]} for="cCB3">
        <div className={styles["customCheckBox"]}>
          <div className={styles["inner"]}>Option</div>
        </div>
      </label>
    </div>
  </div>
);

export default Radio_simply;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_simply = () => (
         <div>
          <div className="customCheckBoxHolder">

    <input className="customCheckBoxInput" id="cCB1" type="checkbox" />
    <label className="customCheckBoxWrapper" for="cCB1">
        <div className="customCheckBox">
            <div className="inner">Option</div>
        </div>
    </label>

    <input className="customCheckBoxInput" id="cCB2" type="checkbox" />
    <label className="customCheckBoxWrapper" for="cCB2">
        <div className="customCheckBox">
            <div className="inner">Option</div>
        </div>
    </label>

    <input className="customCheckBoxInput" id="cCB3" type="checkbox" />
    <label className="customCheckBoxWrapper" for="cCB3">
        <div className="customCheckBox">
            <div className="inner">Option</div>
        </div>
    </label>

</div>
        </div>
        );

        export default Radio_simply;
        
        
         */
}

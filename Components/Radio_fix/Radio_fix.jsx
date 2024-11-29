import React from "react";
import styles from "./Radio_fix.module.css";

const Radio_fix = () => (
  <div>
    <div className={styles["radio-input"]}>
      <div className={styles["radio-input-path"]}>
        <div className={styles["radioContainer1"] + styles["radioContainer"]}>
          <label className={styles["label1"]} for="value-1">
            1
          </label>
          <input
            className={styles["radio1"]}
            value="value-1"
            name="value-radio"
            id="value-1"
            type="radio"
          />
        </div>
        <div className={styles["radioContainer"] + styles["radioContainer2"]}>
          <label className={styles["label2"]} for="value-2">
            2
          </label>
          <input
            className={styles["radio2"]}
            value="value-2"
            name="value-radio"
            id="value-2"
            type="radio"
          />
        </div>
        <div className={styles["radioContainer"] + styles["radioContainer3"]}>
          <label className={styles["label3"]} for="value-3">
            3
          </label>
          <input
            className={styles["radio3"]}
            value="value-3"
            name="value-radio"
            id="value-3"
            type="radio"
          />
        </div>
        <div className={styles["radioContainer"] + styles["radioContainer4"]}>
          <label className={styles["label4"]} for="value-4">
            4
          </label>
          <input
            className={styles["radio4"]}
            value="value-4"
            name="value-radio"
            id="value-4"
            type="radio"
          />
        </div>
        <div className={styles["radioContainer"] + styles["radioContainer5"]}>
          <label className={styles["label5"]} for="value-5">
            5
          </label>
          <input
            className={styles["radio5"]}
            value="value-5"
            name="value-radio"
            id="value-5"
            type="radio"
          />
        </div>
      </div>
      <div className={styles["knob"]}>
        <div className={styles["center"]}></div>
      </div>
    </div>
  </div>
);

export default Radio_fix;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_fix = () => (
         <div>
          <div className="radio-input">
  <div className="radio-input-path">
    <div className="radioContainer1 radioContainer">
      <label className="label1" for="value-1">1</label>
      <input
        className="radio1"
        value="value-1"
        name="value-radio"
        id="value-1"
        type="radio"
      />
    </div>
    <div className="radioContainer radioContainer2">
      <label className="label2" for="value-2">2</label>
      <input
        className="radio2"
        value="value-2"
        name="value-radio"
        id="value-2"
        type="radio"
      />
    </div>
    <div className="radioContainer radioContainer3">
      <label className="label3" for="value-3">3</label>
      <input
        className="radio3"
        value="value-3"
        name="value-radio"
        id="value-3"
        type="radio"
      />
    </div>
    <div className="radioContainer radioContainer4">
      <label className="label4" for="value-4">4</label>
      <input
        className="radio4"
        value="value-4"
        name="value-radio"
        id="value-4"
        type="radio"
      />
    </div>
    <div className="radioContainer radioContainer5">
      <label className="label5" for="value-5">5</label>
      <input
        className="radio5"
        value="value-5"
        name="value-radio"
        id="value-5"
        type="radio"
      />
    </div>
  </div>
  <div className="knob">
    <div className="center"></div>
  </div>
</div>
        </div>
        );

        export default Radio_fix;
        
        
         */
}

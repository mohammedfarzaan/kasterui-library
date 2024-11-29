import React from "react";
import styles from "./Radio_mile.module.css";

const Radio_mile = () => (
  <div>
    <div className={styles["radioContainer"]}>
      <input
        className={styles["radioButton"]}
        type="radio"
        id="value-1"
        name="value-radio"
        value="value-1"
        checked=""
      />
      <label className={styles["container"]} for="value-1">
        <div className={styles["border"]}></div>
        <div className={styles["border2"]}></div>
        <div className={styles["circle"]}></div>
      </label>

      <input
        className={styles["radioButton"]}
        type="radio"
        id="value-2"
        name="value-radio"
        value="value-2"
      />
      <label className={styles["container"]} for="value-2">
        <div className={styles["border"]}></div>
        <div className={styles["border2"]}></div>
        <div className={styles["circle"]}></div>
      </label>

      <input
        className={styles["radioButton"]}
        type="radio"
        id="value-3"
        name="value-radio"
        value="value-3"
      />
      <label className={styles["container"]} for="value-3">
        <div className={styles["border"]}></div>
        <div className={styles["border2"]}></div>
        <div className={styles["circle"]}></div>
      </label>
    </div>
  </div>
);

export default Radio_mile;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_mile = () => (
         <div>
          <div className="radioContainer">

    <input className="radioButton" type="radio" id="value-1" name="value-radio" value="value-1" checked="" />
    <label className="container" for="value-1">
      <div className="border"></div>
      <div className="border2"></div>
      <div className="circle"></div>
    </label>

    <input className="radioButton" type="radio" id="value-2" name="value-radio" value="value-2" />
    <label className="container" for="value-2">
      <div className="border"></div>
      <div className="border2"></div>
      <div className="circle"></div>
    </label>

    <input className="radioButton" type="radio" id="value-3" name="value-radio" value="value-3" />
    <label className="container" for="value-3">
      <div className="border"></div>
      <div className="border2"></div>
      <div className="circle"></div>
    </label>


</div>
        </div>
        );

        export default Radio_mile;
        
        
         */
}

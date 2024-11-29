import React from "react";
import styles from "./Radio_tool.module.css";

const Radio_tool = () => (
  <div>
    <form action="" className={styles["container"]}>
      <input
        className={styles["input-btn"]}
        type="radio"
        id="valueIs-1"
        name="valueIs-radio"
        checked=""
        value="valueIs-1"
      />
      <label className={styles["neon-btn"]} for="valueIs-1">
        <span className={styles["span"]}></span>
        <span className={styles["txt"]}>OPTION 1</span>
      </label>

      <input
        className={styles["input-btn"]}
        type="radio"
        id="valueIs-2"
        name="valueIs-radio"
        value="valueIs-2"
      />
      <label className={styles["neon-btn"]} for="valueIs-2">
        <span className={styles["span"]}></span>
        <span className={styles["txt"]}>OPTION 2</span>
      </label>
    </form>
  </div>
);

export default Radio_tool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_tool = () => (
         <div>
          <form action="" className="container">
        <input className="input-btn" type="radio" id="valueIs-1" name="valueIs-radio" checked="" value="valueIs-1" />
        <label className="neon-btn" for="valueIs-1">
            <span className="span"></span>
            <span className="txt">OPTION 1</span>
        </label>

        <input className="input-btn" type="radio" id="valueIs-2" name="valueIs-radio" value="valueIs-2" />
        <label className="neon-btn" for="valueIs-2">
            <span className="span"></span>
            <span className="txt">OPTION 2</span>
        </label>
    </form>
        </div>
        );

        export default Radio_tool;
        
        
         */
}

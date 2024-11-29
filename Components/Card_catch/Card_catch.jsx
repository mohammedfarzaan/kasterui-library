import React from "react";
import styles from "./Card_catch.module.css";

const Card_catch = () => (
  <div>
    <div className={styles["card-conteiner"]}>
      <div className={styles["card-content"]}>
        <div className={styles["card-title"]}>
          Price <span>Range</span>
        </div>
        <div className={styles["values"]}>
          <div>
            $<span id="first">735</span>
          </div>{" "}
          -
          <div>
            $<span id="second">6 465</span>
          </div>
        </div>
        <small className={styles["current-range"]}>
          Current Range:
          <div>
            $<span id="third">7 200</span>
          </div>
        </small>
        <div
          data-range="#third"
          data-value-1="#second"
          data-value-0="#first"
          className={styles["slider"]}
        >
          <label className={styles["label-min-value"]}>1</label>
          <label className={styles["label-max-value"]}>10 000</label>
        </div>
        <div className={styles["rangeslider"]}>
          <input
            className={styles["min"] + styles["input-ranges"]}
            name="range_1"
            type="range"
            min="1"
            max="10000"
            value="735"
          />
          <input
            className={styles["max"] + styles["input-ranges"]}
            name="range_1"
            type="range"
            min="1"
            max="10000"
            value="6465"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Card_catch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_catch = () => (
         <div>
          <div className="card-conteiner">
  <div className="card-content">
    <div className="card-title">Price <span>Range</span></div>
    <div className="values">
      <div>$<span id="first">735</span></div> -
      <div>$<span id="second">6 465</span></div>
    </div>
    <small className="current-range">
      Current Range:
      <div>$<span id="third">7 200</span></div>
    </small>
    <div data-range="#third" data-value-1="#second" data-value-0="#first" className="slider">
      <label className="label-min-value">1</label>
      <label className="label-max-value">10 000</label>
    </div>
    <div className="rangeslider">
      <input className="min input-ranges" name="range_1" type="range" min="1" max="10000" value="735" />
      <input className="max input-ranges" name="range_1" type="range" min="1" max="10000" value="6465" />
    </div>
  </div>
</div>
        </div>
        );

        export default Card_catch;
        
        
         */
}

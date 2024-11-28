import React from "react";
import styles from "./Button_part.module.css";

const Button_part = () => (
  <div>
    <div className={styles["click"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button className={styles["button"] + styles["up"]}>
        <div className={styles["speak"] + styles["dblink"]}>
          <div className={styles["wrap"]}>
            <div className={styles["eye"] + styles["double-blink"]}></div>
            <div className={styles["eye"] + styles["double-blink"]}></div>
          </div>
        </div>
        <p></p>
        <p></p>
        <p></p>
        <div className={styles["speak"] + styles["doblink"]}>
          <div className={styles["wrap"]}>
            <div className={styles["eye"] + styles["down"]}></div>
            <div className={styles["eye"] + styles["down"]}></div>
          </div>
        </div>
        <div className={styles["speak"] + styles["rblink"]}>
          <div className={styles["wrap"]}>
            <div className={styles["eye"] + styles["right-blink"]}></div>
            <div className={styles["eye"] + styles["right-blink"]}></div>
          </div>
        </div>
        <div className={styles["speak"] + styles["ublink"]}>
          <div className={styles["wrap"]}>
            <div className={styles["eye"] + styles["up-blink"]}></div>
            <div className={styles["eye"] + styles["up-blink"]}></div>
          </div>
        </div>
      </button>
      <button
        disabled=""
        className={styles["button"] + styles["shadow"]}
      ></button>
    </div>
  </div>
);

export default Button_part;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_part = () => (
         <div>
          <div className="click">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <button className="button up">
    <div className="speak dblink">
      <div className="wrap">
        <div className="eye double-blink"></div>
        <div className="eye double-blink"></div>
      </div>
    </div>
    <p></p>
    <p></p>
    <p></p>
    <div className="speak doblink">
      <div className="wrap">
        <div className="eye down"></div>
        <div className="eye down"></div>
      </div>
    </div>
    <div className="speak rblink">
      <div className="wrap">
        <div className="eye right-blink"></div>
        <div className="eye right-blink"></div>
      </div>
    </div>
    <div className="speak ublink">
      <div className="wrap">
        <div className="eye up-blink"></div>
        <div className="eye up-blink"></div>
      </div>
    </div>
  </button>
  <button disabled="" className="button shadow"></button>
</div>
        </div>
        );

        export default Button_part;
        
        
         */
}

import React from "react";
import styles from "./Button_market.module.css";

const Button_market = () => (
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

export default Button_market;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_market = () => (
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

        export default Button_market;
        
        
         */
}

import React from "react";
import styles from "./Radio_driven.module.css";

const Radio_driven = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["card"]}>
        <input
          className={styles["input"]}
          type="radio"
          name="card"
          value="basic"
        />
        <span className={styles["check"]}></span>
        <label className={styles["label"]}>
          <div className={styles["title"]}>BASIC</div>
          <div className={styles["price"]}>
            <span className={styles["span"]}>$</span>
            15
            <span className={styles["span"]}>/month</span>
          </div>
        </label>
      </div>
      <div className={styles["card"]}>
        <input
          className={styles["input"]}
          type="radio"
          name="card"
          value="standart"
        />
        <span className={styles["check"]}></span>
        <label className={styles["label"]}>
          <div className={styles["title"]}>STANDART</div>
          <div className={styles["price"]}>
            <span className={styles["span"]}>$</span>
            30
            <span className={styles["span"]}>/month</span>
          </div>
        </label>
      </div>
      <div className={styles["card"]}>
        <input
          className={styles["input"]}
          type="radio"
          name="card"
          value="premium"
        />
        <span className={styles["check"]}></span>
        <label className={styles["label"]}>
          <div className={styles["title"]}>PREMIUM</div>
          <div className={styles["price"]}>
            <span className={styles["span"]}>$</span>
            60
            <span className={styles["span"]}>/month</span>
          </div>
        </label>
      </div>
    </div>
  </div>
);

export default Radio_driven;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_driven = () => (
         <div>
          <div className="wrapper">
  <div className="card">
    <input className="input" type="radio" name="card" value="basic" />
    <span className="check"></span>
    <label className="label">
      <div className="title">BASIC</div>
      <div className="price">
        <span className="span">$</span>
        15
        <span className="span">/month</span>
      </div>
    </label>
  </div>
  <div className="card">
    <input className="input" type="radio" name="card" value="standart" />
    <span className="check"></span>
    <label className="label">
      <div className="title">STANDART</div>
      <div className="price">
        <span className="span">$</span>
        30
        <span className="span">/month</span>
      </div>
    </label>
  </div>
  <div className="card">
    <input className="input" type="radio" name="card" value="premium" />
    <span className="check"></span>
    <label className="label">
      <div className="title">PREMIUM</div>
      <div className="price">
        <span className="span">$</span>
        60
        <span className="span">/month</span>
      </div>
    </label>
  </div>
</div>
        </div>
        );

        export default Radio_driven;
        
        
         */
}

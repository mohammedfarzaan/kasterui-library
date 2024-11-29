import React from "react";
import styles from "./Radio_forgot.module.css";

const Radio_forgot = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["radio-wrapper"]}>
        <input
          className={styles["input"]}
          name="btn"
          id="value-1"
          type="radio"
        />
        <div className={styles["btn"]}>
          <span aria-hidden="">_</span>Cyber
          <span className={styles["btn__glitch"]} aria-hidden="">
            _Cyber🦾
          </span>
          <label className={styles["number"]}>r1</label>
        </div>
      </div>
      <div className={styles["radio-wrapper"]}>
        <input
          className={styles["input"]}
          name="btn"
          id="value-2"
          checked="true"
          type="radio"
        />
        <div className={styles["btn"]}>
          _Radio<span aria-hidden="">_</span>
          <span className={styles["btn__glitch"]} aria-hidden="">
            _R_a_d_i_o_
          </span>
          <label className={styles["number"]}>r2</label>
        </div>
      </div>
      <div className={styles["radio-wrapper"]}>
        <input
          className={styles["input"]}
          name="btn"
          id="value-3"
          type="radio"
        />
        <div className={styles["btn"]}>
          Buttons<span aria-hidden=""></span>
          <span className={styles["btn__glitch"]} aria-hidden="">
            Buttons_
          </span>
          <label className={styles["number"]}>r3</label>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_forgot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_forgot = () => (
         <div>
          <div className="container">
  <div className="radio-wrapper">
    <input className="input" name="btn" id="value-1" type="radio" />
    <div className="btn">
      <span aria-hidden="">_</span>Cyber
      <span className="btn__glitch" aria-hidden="">_Cyber🦾</span>
      <label className="number">r1</label>
    </div>
  </div>
  <div className="radio-wrapper">
    <input className="input" name="btn" id="value-2" checked="true" type="radio" />
    <div className="btn">
      _Radio<span aria-hidden="">_</span>
      <span className="btn__glitch" aria-hidden="">_R_a_d_i_o_</span>
      <label className="number">r2</label>
    </div>
  </div>
  <div className="radio-wrapper">
    <input className="input" name="btn" id="value-3" type="radio" />
    <div className="btn">
      Buttons<span aria-hidden=""></span>
      <span className="btn__glitch" aria-hidden="">Buttons_</span>
      <label className="number">r3</label>
    </div> 
  </div>
</div>
        </div>
        );

        export default Radio_forgot;
        
        
         */
}

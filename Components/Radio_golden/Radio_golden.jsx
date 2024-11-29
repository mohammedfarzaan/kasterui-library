import React from "react";
import styles from "./Radio_golden.module.css";

const Radio_golden = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["radio-wrapper"]}>
        <input
          type="radio"
          id="value-1"
          name="btn"
          className={styles["input"]}
        />
        <div className={styles["btn"]}>
          <span aria-hidden="">_</span>Cyber
          <span aria-hidden="" className={styles["btn__glitch"]}>
            _Cyber🦾
          </span>
          <label className={styles["number"]}>r1</label>
        </div>
      </div>
      <div className={styles["radio-wrapper"]}>
        <input
          type="radio"
          checked="true"
          id="value-2"
          name="btn"
          className={styles["input"]}
        />
        <div className={styles["btn"]}>
          _Radio<span aria-hidden="">_</span>
          <span aria-hidden="" className={styles["btn__glitch"]}>
            _R_a_d_i_o_
          </span>
          <label className={styles["number"]}>r2</label>
        </div>
      </div>
      <div className={styles["radio-wrapper"]}>
        <input
          type="radio"
          id="value-3"
          name="btn"
          className={styles["input"]}
        />
        <div className={styles["btn"]}>
          Buttons<span aria-hidden=""></span>
          <span aria-hidden="" className={styles["btn__glitch"]}>
            Buttons_
          </span>
          <label className={styles["number"]}>r3</label>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_golden;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_golden = () => (
         <div>
          <div className="container">
  <div className="radio-wrapper">
    <input type="radio" id="value-1" name="btn" className="input" />
    <div className="btn">
      <span aria-hidden="">_</span>Cyber
      <span aria-hidden="" className="btn__glitch">_Cyber🦾</span>
      <label className="number">r1</label>
    </div>
  </div>
  <div className="radio-wrapper">
    <input type="radio" checked="true" id="value-2" name="btn" className="input" />
    <div className="btn">
      _Radio<span aria-hidden="">_</span>
      <span aria-hidden="" className="btn__glitch">_R_a_d_i_o_</span>
      <label className="number">r2</label>
    </div>
  </div>
  <div className="radio-wrapper">
    <input type="radio" id="value-3" name="btn" className="input" />
    <div className="btn">
      Buttons<span aria-hidden=""></span>
      <span aria-hidden="" className="btn__glitch">Buttons_</span>
      <label className="number">r3</label>
    </div> 
  </div>
</div>
        </div>
        );

        export default Radio_golden;
        
        
         */
}

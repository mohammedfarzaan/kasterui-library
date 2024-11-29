import React from "react";
import styles from "./Radio_root.module.css";

const Radio_root = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label className={styles["radio-component"]}>
        <input
          value="value-1"
          name="RadioV"
          className={styles["radiostyle"]}
          id="value-1"
          type="radio"
        />

        <span className={styles["RadioBtn"]}>
          <div className={styles["radioTxt1"]}> Sun &nbsp; </div>
          <span className={styles["crater"] + styles["Krt2"]}></span>
        </span>
      </label>
      <label className={styles["radio-component"]}>
        <input
          value="value-2"
          name="RadioV"
          className={styles["radiostyle"]}
          id="value-2"
          type="radio"
        />

        <span className={styles["RadioBtn2"]}>
          <div className={styles["radioTxt2"]}>Moon</div>
          <span className={styles["crater"] + styles["Krt1"]}></span>
          <span className={styles["crater"] + styles["Krt2"]}></span>
          <span className={styles["crater"] + styles["Krt3"]}></span>
        </span>
      </label>
      <label className={styles["radio-component"]}>
        <input
          value="value-3"
          name="RadioV"
          className={styles["radiostyle"]}
          id="value-3"
          type="radio"
        />

        <span className={styles["RadioBtn3"]}>
          <div className={styles["radioTxt3"]}>Dark</div>

          <span className={styles["crater"] + styles["Krt3"]}></span>
        </span>
      </label>
    </div>
  </div>
);

export default Radio_root;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_root = () => (
         <div>
          <div className="radio-input">
    <label className="radio-component">
        <input value="value-1" name="RadioV" className="radiostyle" id="value-1" type="radio" />
      
      <span className="RadioBtn">
        <div className="radioTxt1"> Sun &nbsp; </div>
         <span className="crater Krt2"></span>
              
    </span></label>
    <label className="radio-component">
        <input value="value-2" name="RadioV" className="radiostyle" id="value-2" type="radio" />
          
      
        <span className="RadioBtn2">
          <div className="radioTxt2">Moon</div>
              <span className="crater Krt1"></span>
              <span className="crater Krt2"></span>
              <span className="crater Krt3"></span>
          </span>
      
    </label>
    <label className="radio-component">
        <input value="value-3" name="RadioV" className="radiostyle" id="value-3" type="radio" />
      
          <span className="RadioBtn3">
            <div className="radioTxt3">Dark</div>
             
              <span className="crater Krt3"></span>
          </span>
            
    </label>
  </div>
        </div>
        );

        export default Radio_root;
        
        
         */
}

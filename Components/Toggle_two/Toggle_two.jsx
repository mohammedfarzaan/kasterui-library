import React from "react";
import styles from "./Toggle_two.module.css";

const Toggle_two = () => (
  <div>
    <div className={styles["container"]}>
      <input
        className={styles["label-check"]}
        id="label-check"
        type="checkbox"
      />
      <label for="label-check" className={styles["hamburger-label"]}>
        <div className={styles["line1"]}></div>
        <div className={styles["line2"]}></div>
        <div className={styles["line3"]}></div>
        <label></label>
      </label>
    </div>
  </div>
);

export default Toggle_two;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_two = () => (
         <div>
          <div className="container">  
  <input className="label-check" id="label-check" type="checkbox" />
    <label for="label-check" className="hamburger-label">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    <label></label></label></div>
        </div>
        );

        export default Toggle_two;
        
        
         */
}

import React from "react";
import styles from "./Input_office.module.css";

const Input_office = () => (
  <div>
    <div className={styles["brutalist-container"]}>
      <input
        placeholder="TYPE HERE"
        className={styles["brutalist-input"] + styles["smooth-type"]}
        type="text"
      />
      <label className={styles["brutalist-label"]}>SMOOTH BRUTALIST</label>
    </div>
  </div>
);

export default Input_office;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_office = () => (
         <div>
          <div className="brutalist-container">
  <input
    placeholder="TYPE HERE"
    className="brutalist-input smooth-type"
    type="text"
  />
  <label className="brutalist-label">SMOOTH BRUTALIST</label>
</div>
        </div>
        );

        export default Input_office;
        
        
         */
}

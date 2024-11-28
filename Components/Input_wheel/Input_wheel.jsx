import React from "react";
import styles from "./Input_wheel.module.css";

const Input_wheel = () => (
  <div>
    <div className={styles["input-container"]}>
      <input className={styles["input"]} name="text" type="text" />
      <label className={styles["label"]} for="input">
        Enter Your Name
      </label>
      <div className={styles["topline"]}></div>
      <div className={styles["underline"]}></div>
    </div>
  </div>
);

export default Input_wheel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_wheel = () => (
         <div>
          <div className="input-container">
<input className="input" name="text" type="text" />
<label className="label" for="input">Enter Your Name</label>
<div className="topline"></div>
<div className="underline"></div>
</div>
        </div>
        );

        export default Input_wheel;
        
        
         */
}

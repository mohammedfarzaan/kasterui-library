import React from "react";
import styles from "./Input_write.module.css";

const Input_write = () => (
  <div>
    <div className={styles["input-container"]}>
      <input required="" id="input" type="text" />
      <label className={styles["label"]} for="input">
        Enter Text
      </label>
      <div className={styles["underline"]}></div>
      <div className={styles["sideline"]}></div>
      <div className={styles["upperline"]}></div>
      <div className={styles["line"]}></div>
    </div>
  </div>
);

export default Input_write;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_write = () => (
         <div>
          <div className="input-container">
        <input required="" id="input" type="text" />
        <label className="label" for="input">Enter Text</label>
        <div className="underline"></div>
        <div className="sideline"></div>
        <div className="upperline"></div>
        <div className="line"></div>
    </div>
        </div>
        );

        export default Input_write;
        
        
         */
}

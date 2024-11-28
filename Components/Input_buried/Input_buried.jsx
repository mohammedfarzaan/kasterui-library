import React from "react";
import styles from "./Input_buried.module.css";

const Input_buried = () => (
  <div>
    <div className={styles["input-container"]}>
      <input type="text" name="text" className={styles["input"]} />
      <label className={styles["label"]}>Input title</label>
      <div className={styles["top-line"]}></div>
      <div className={styles["under-line"]}></div>
    </div>
  </div>
);

export default Input_buried;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_buried = () => (
         <div>
          <div className="input-container">
  <input type="text" name="text" className="input" />
  <label className="label">Input title</label>
  <div className="top-line"></div>
  <div className="under-line"></div>
</div>
        </div>
        );

        export default Input_buried;
        
        
         */
}

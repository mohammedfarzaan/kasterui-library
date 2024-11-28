import React from "react";
import styles from "./Input_gift.module.css";

const Input_gift = () => (
  <div>
    <div className={styles["input-container"]}>
      <input
        placeholder="Enter text"
        className={styles["input-field"]}
        type="text"
      />
      <label for="input-field" className={styles["input-label"]}>
        Enter text
      </label>
      <span className={styles["input-highlight"]}></span>
    </div>
  </div>
);

export default Input_gift;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_gift = () => (
         <div>
          <div className="input-container">
  <input placeholder="Enter text" className="input-field" type="text" />
  <label for="input-field" className="input-label">Enter text</label>
  <span className="input-highlight"></span>
</div>
        </div>
        );

        export default Input_gift;
        
        
         */
}

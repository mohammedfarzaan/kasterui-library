import React from "react";
import styles from "./Input_she.module.css";

const Input_she = () => (
  <div>
    <div className={styles["input-container"]}>
      <input type="text" id="input" required="" />
      <label for="input" className={styles["label"]}>
        Enter Text
      </label>
      <div className={styles["underline"]}></div>
    </div>
  </div>
);

export default Input_she;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_she = () => (
         <div>
          <div className="input-container">
  <input type="text" id="input" required="" />
  <label for="input" className="label">Enter Text</label>
  <div className="underline"></div>
</div>
        </div>
        );

        export default Input_she;
        
        
         */
}

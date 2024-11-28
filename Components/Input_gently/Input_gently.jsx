import React from "react";
import styles from "./Input_gently.module.css";

const Input_gently = () => (
  <div>
    <div className={styles["input-container"]}>
      <input
        type="text"
        name="text"
        className={styles["input"]}
        placeholder="Enter text"
      />
      <div className={styles["highlight"]}></div>
    </div>
  </div>
);

export default Input_gently;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_gently = () => (
         <div>
          <div className="input-container">
  <input type="text" name="text" className="input" placeholder="Enter text" />
  <div className="highlight"></div>
</div>
        </div>
        );

        export default Input_gently;
        
        
         */
}

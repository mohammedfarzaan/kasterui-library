import React from "react";
import styles from "./Toggle_block.module.css";

const Toggle_block = () => (
  <div>
    <div className={styles["container"]}>
      <input hidden="" id="check" name="check" type="checkbox" />
      <label className={styles["toggle"]} for="check">
        <div className={styles["toggle__circle"]}></div>
      </label>
      <div className={styles["toggle-text"]}>
        <span>N</span>
        <span>F</span>
      </div>
    </div>
  </div>
);

export default Toggle_block;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_block = () => (
         <div>
          <div className="container">
        <input hidden="" id="check" name="check" type="checkbox" />
        <label className="toggle" for="check">
            <div className="toggle__circle"></div>
        </label>
        <div className="toggle-text">
            <span>N</span>
            <span>F</span>
        </div>
    </div>
        </div>
        );

        export default Toggle_block;
        
        
         */
}

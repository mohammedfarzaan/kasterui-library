import React from "react";
import styles from "./Toggle_buried.module.css";

const Toggle_buried = () => (
  <div>
    <div id="app">
      <label className={styles["checker"]}>
        <input type="checkbox" className={styles["checkbox"]} />
        <div className={styles["check-bg"]}></div>
        <div className={styles["checkmark"]}>
          <svg viewBox="0 0 100 100">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="15"
              stroke="#FFF"
              fill="none"
              d="M20,55 L40,75 L77,27"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  </div>
);

export default Toggle_buried;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_buried = () => (
         <div>
          <div id="app">
  <label className="checker">
    <input type="checkbox" className="checkbox" />
    <div className="check-bg"></div>
    <div className="checkmark">
      <svg viewBox="0 0 100 100">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="15" stroke="#FFF" fill="none" d="M20,55 L40,75 L77,27"></path>
      </svg>
    </div>
  </label>
</div>
        </div>
        );

        export default Toggle_buried;
        
        
         */
}

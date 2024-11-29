import React from "react";
import styles from "./Toggle_put.module.css";

const Toggle_put = () => (
  <div>
    <div className={styles["checkbox-wrapper-51"]}>
      <input id="cbx-51" type="checkbox" />
      <label className={styles["toggle"]} for="cbx-51">
        <span>
          <svg viewBox="0 0 10 10" height="10px" width="10px">
            <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
          </svg>
        </span>
      </label>
    </div>
  </div>
);

export default Toggle_put;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_put = () => (
         <div>
          <div className="checkbox-wrapper-51">
  <input id="cbx-51" type="checkbox" />
  <label className="toggle" for="cbx-51">
    <span>
      <svg viewBox="0 0 10 10" height="10px" width="10px">
        <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
      </svg>
    </span>
  </label>
</div>
        </div>
        );

        export default Toggle_put;
        
        
         */
}

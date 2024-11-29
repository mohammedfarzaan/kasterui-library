import React from "react";
import styles from "./Input_full.module.css";

const Input_full = () => (
  <div>
    <div className={styles["relative"]}>
      <input
        className={styles["input-cal"] + styles["input-base"]}
        id="input"
        placeholder=""
        type="text"
      />
      <label id="label-input">Name</label>
    </div>
  </div>
);

export default Input_full;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_full = () => (
         <div>
          <div className="relative">
  <input className="input-cal input-base" id="input" placeholder="" type="text" />
  <label id="label-input">Name</label>
</div>
        </div>
        );

        export default Input_full;
        
        
         */
}

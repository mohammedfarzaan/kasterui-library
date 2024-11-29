import React from "react";
import styles from "./Input_mix.module.css";

const Input_mix = () => (
  <div>
    <div id="dateDiv">
      <input
        type="text"
        id="dateInput"
        className={styles["dateInput"]}
        placeholder="Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMYYYY"
      />
    </div>
  </div>
);

export default Input_mix;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_mix = () => (
         <div>
          <div id="dateDiv">
  <input
    type="text"
    id="dateInput"
    className="dateInput"
    placeholder="Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMYYYY"
  />
</div>
        </div>
        );

        export default Input_mix;
        
        
         */
}

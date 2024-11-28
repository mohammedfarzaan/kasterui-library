import React from "react";
import styles from "./Toggle_sister.module.css";

const Toggle_sister = () => (
  <div>
    <input id="checkbox_toggle" type="checkbox" className={styles["check"]} />
    <div className={styles["checkbox"]}>
      <label className={styles["slide"]} for="checkbox_toggle">
        <label className={styles["toggle"]} for="checkbox_toggle"></label>
        <label className={styles["text"]} for="checkbox_toggle">
          Day
        </label>
        <label className={styles["text"]} for="checkbox_toggle">
          Night
        </label>
      </label>
    </div>
  </div>
);

export default Toggle_sister;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_sister = () => (
         <div>
          <input id="checkbox_toggle" type="checkbox" className="check" />
<div className="checkbox">
  <label className="slide" for="checkbox_toggle">
    <label className="toggle" for="checkbox_toggle"></label>
    <label className="text" for="checkbox_toggle">Day</label>
    <label className="text" for="checkbox_toggle">Night</label>
  </label>
</div>
        </div>
        );

        export default Toggle_sister;
        
        
         */
}

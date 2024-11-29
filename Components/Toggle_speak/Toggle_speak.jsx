import React from "react";
import styles from "./Toggle_speak.module.css";

const Toggle_speak = () => (
  <div>
    <div>
      <div className={styles["switch"]}>
        <input
          type="checkbox"
          id="switch1"
          className={styles["switch-check"]}
        />
        <label for="switch1" className={styles["switch-label"]}>
          Check
          <span></span>
        </label>
      </div>
    </div>
  </div>
);

export default Toggle_speak;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_speak = () => (
         <div>
          <div>
  <div className="switch">
    <input type="checkbox" id="switch1" className="switch-check" />
    <label for="switch1" className="switch-label">
      Check
      <span></span>
    </label>
  </div>
</div>
        </div>
        );

        export default Toggle_speak;
        
        
         */
}

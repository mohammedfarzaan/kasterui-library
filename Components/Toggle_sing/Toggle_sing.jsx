import React from "react";
import styles from "./Toggle_sing.module.css";

const Toggle_sing = () => (
  <div>
    <div className={styles["switch-wrap"]}>
      <input
        className={styles["switch-input"]}
        aria-label="switch"
        name="switch"
        id="switch"
        type="checkbox"
        hidden=""
      />
      <label className={styles["switch-label"]} for="switch"></label>
      <span className={styles["switch-marbles"]}></span>
    </div>
  </div>
);

export default Toggle_sing;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_sing = () => (
         <div>
          <div className="switch-wrap">
  <input
    className="switch-input"
    aria-label="switch"
    name="switch"
    id="switch"
    type="checkbox"
    hidden=""
  />
  <label className="switch-label" for="switch"></label>
  <span className="switch-marbles"></span>
</div>
        </div>
        );

        export default Toggle_sing;
        
        
         */
}

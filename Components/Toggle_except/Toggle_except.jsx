import React from "react";
import styles from "./Toggle_except.module.css";

const Toggle_except = () => (
  <div>
    <div className={styles["toggle-cont"]}>
      <input
        className={styles["toggle-input"]}
        id="toggle"
        name="toggle"
        type="checkbox"
      />
      <label className={styles["toggle-label"]} for="toggle">
        <div className={styles["cont-label-play"]}>
          <span className={styles["label-play"]}></span>
        </div>
      </label>
    </div>
  </div>
);

export default Toggle_except;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_except = () => (
         <div>
          <div className="toggle-cont">
  <input className="toggle-input" id="toggle" name="toggle" type="checkbox" />
  <label className="toggle-label" for="toggle">
    <div className="cont-label-play">
      <span className="label-play"></span>
    </div>
  </label>
</div>
        </div>
        );

        export default Toggle_except;
        
        
         */
}

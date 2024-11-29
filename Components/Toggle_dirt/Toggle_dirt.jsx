import React from "react";
import styles from "./Toggle_dirt.module.css";

const Toggle_dirt = () => (
  <div>
    <label className={styles["switch"]}>
      <input
        role="switch"
        type="checkbox"
        className={styles["switch__input"]}
      />
      <span className={styles["switch__bg"]}></span>
      <span className={styles["switch__label"]}>Power</span>
    </label>
  </div>
);

export default Toggle_dirt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_dirt = () => (
         <div>
          <label className="switch">
  <input role="switch" type="checkbox" className="switch__input" />
  <span className="switch__bg"></span>
  <span className="switch__label">Power</span>
</label>
        </div>
        );

        export default Toggle_dirt;
        
        
         */
}

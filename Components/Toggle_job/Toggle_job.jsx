import React from "react";
import styles from "./Toggle_job.module.css";

const Toggle_job = () => (
  <div>
    <div className={styles["content"]}>
      <label className={styles["switch"]}>
        <input type="checkbox" className={styles["input"]} />
        <span className={styles["slider"] + styles["round"]}></span>
      </label>
    </div>
  </div>
);

export default Toggle_job;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_job = () => (
         <div>
          <div className="content">
  <label className="switch">
    <input type="checkbox" className="input" />
    <span className="slider round"></span>
  </label>
</div>
        </div>
        );

        export default Toggle_job;
        
        
         */
}

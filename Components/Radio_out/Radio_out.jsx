import React from "react";
import styles from "./Radio_out.module.css";

const Radio_out = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input name="btn" type="radio" className={styles["input"]} />
      <span className={styles["span"]}></span>
    </div>
    <div className={styles["radio-input"]}>
      <input checked="" name="btn" type="radio" className={styles["input"]} />
      <span className={styles["span"]}></span>
    </div>
  </div>
);

export default Radio_out;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_out = () => (
         <div>
          <div className="radio-input">
  <input name="btn" type="radio" className="input" />
  <span className="span"></span>
</div>
<div className="radio-input">
  <input checked="" name="btn" type="radio" className="input" />
  <span className="span"></span>
</div>
        </div>
        );

        export default Radio_out;
        
        
         */
}

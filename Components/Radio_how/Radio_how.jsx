import React from "react";
import styles from "./Radio_how.module.css";

const Radio_how = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input name="radio" type="radio" className={styles["input"]} checked="" />
      <input name="radio" type="radio" className={styles["input"]} />
      <input name="radio" type="radio" className={styles["input"]} />
    </div>
  </div>
);

export default Radio_how;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_how = () => (
         <div>
          <div className="radio-input">
  <input name="radio" type="radio" className="input" checked="" />
  <input name="radio" type="radio" className="input" />
  <input name="radio" type="radio" className="input" />
</div>
        </div>
        );

        export default Radio_how;
        
        
         */
}

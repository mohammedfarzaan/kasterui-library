import React from "react";
import styles from "./Radio_eaten.module.css";

const Radio_eaten = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input type="radio" id="neonShadow" name="value-radio" />
      <span className={styles["span"]}></span>
      <input type="radio" id="neonShadow" name="value-radio" />
      <span className={styles["span"]}></span>
      <input type="radio" id="neonShadow" name="value-radio" />
      <span className={styles["span"]}></span>
    </div>
  </div>
);

export default Radio_eaten;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_eaten = () => (
         <div>
          <div className="radio-input">
  <input type="radio" id="neonShadow" name="value-radio" /><span className="span"></span>
  <input type="radio" id="neonShadow" name="value-radio" /><span className="span"></span>
  <input type="radio" id="neonShadow" name="value-radio" /><span className="span"></span>
</div>
        </div>
        );

        export default Radio_eaten;
        
        
         */
}

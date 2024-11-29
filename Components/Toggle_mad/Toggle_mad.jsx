import React from "react";
import styles from "./Toggle_mad.module.css";

const Toggle_mad = () => (
  <div>
    <label>
      <input type="checkbox" className={styles["inp"]} />
      <span className={styles["check"]}></span>
    </label>
  </div>
);

export default Toggle_mad;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_mad = () => (
         <div>
          <label>
  <input type="checkbox" className="inp" />
  <span className="check"></span>
</label>
        </div>
        );

        export default Toggle_mad;
        
        
         */
}

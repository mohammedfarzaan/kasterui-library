import React from "react";
import styles from "./Toggle_soon.module.css";

const Toggle_soon = () => (
  <div>
    <div>
      <label className={styles["switch"]}>
        <input type="checkbox" />
        <span>
          <em></em>
          <strong></strong>
        </span>
      </label>
    </div>
  </div>
);

export default Toggle_soon;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_soon = () => (
         <div>
          <div>
  <label className="switch">
    <input type="checkbox" />
    <span>
      <em></em>
      <strong></strong>
    </span>
  </label>
</div>
        </div>
        );

        export default Toggle_soon;
        
        
         */
}

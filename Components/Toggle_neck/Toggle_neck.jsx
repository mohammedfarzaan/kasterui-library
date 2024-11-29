import React from "react";
import styles from "./Toggle_neck.module.css";

const Toggle_neck = () => (
  <div>
    <div className={styles["toggle"]}>
      <input id="toggle-switch" type="checkbox" />
      <label for="toggle-switch"></label>
    </div>
  </div>
);

export default Toggle_neck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_neck = () => (
         <div>
          <div className="toggle">
  <input id="toggle-switch" type="checkbox" />
  <label for="toggle-switch"></label>
</div>
        </div>
        );

        export default Toggle_neck;
        
        
         */
}

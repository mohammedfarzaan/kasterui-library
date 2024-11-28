import React from "react";
import styles from "./Toggle_boy.module.css";

const Toggle_boy = () => (
  <div>
    <div className={styles["toggle-switcher"]}>
      <input
        type="checkbox"
        id="toggle-switch"
        className={styles["toggle-input"]}
      />
      <label for="toggle-switch" className={styles["toggle-label"]}></label>
    </div>
  </div>
);

export default Toggle_boy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_boy = () => (
         <div>
          <div className="toggle-switcher">
  <input type="checkbox" id="toggle-switch" className="toggle-input" />
  <label for="toggle-switch" className="toggle-label"></label>
</div>
        </div>
        );

        export default Toggle_boy;
        
        
         */
}

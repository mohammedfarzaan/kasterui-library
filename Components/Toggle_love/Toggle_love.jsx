import React from "react";
import styles from "./Toggle_love.module.css";

const Toggle_love = () => (
  <div>
    <label className={styles["toggle-switch"]} for="toggle-switch">
      <input type="checkbox" id="toggle-switch" />
      <div className={styles["slider"]}></div>
    </label>
  </div>
);

export default Toggle_love;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_love = () => (
         <div>
          <label className="toggle-switch" for="toggle-switch">
  <input type="checkbox" id="toggle-switch" />
  <div className="slider"></div>
</label>
        </div>
        );

        export default Toggle_love;
        
        
         */
}

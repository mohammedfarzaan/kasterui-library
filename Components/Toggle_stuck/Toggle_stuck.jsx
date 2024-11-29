import React from "react";
import styles from "./Toggle_stuck.module.css";

const Toggle_stuck = () => (
  <div>
    <input type="checkbox" id="toggle_checkbox" />
    <label for="toggle_checkbox">
      <div className={styles["star"]}>🔅</div>
      <div className={styles["moon"]}>🌙</div>
    </label>
  </div>
);

export default Toggle_stuck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_stuck = () => (
         <div>
          <input type="checkbox" id="toggle_checkbox" />
<label for="toggle_checkbox">
  <div className="star">
 🔅
  </div>
  <div className="moon">🌙</div>
</label>
        </div>
        );

        export default Toggle_stuck;
        
        
         */
}

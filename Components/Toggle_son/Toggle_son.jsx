import React from "react";
import styles from "./Toggle_son.module.css";

const Toggle_son = () => (
  <div>
    <div className={styles["switch"]}>
      <input type="checkbox" id="toggle-checkbox" />
      <label for="toggle-checkbox"></label>
    </div>
  </div>
);

export default Toggle_son;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_son = () => (
         <div>
          <div className="switch">
  <input type="checkbox" id="toggle-checkbox" />
  <label for="toggle-checkbox"></label>
</div>
        </div>
        );

        export default Toggle_son;
        
        
         */
}

import React from "react";
import styles from "./Toggle_nose.module.css";

const Toggle_nose = () => (
  <div>
    <input type="checkbox" name="check-toggle" id="checkbox" hidden="" />
    <label for="checkbox" className={styles["toggle"]}>
      G
      <div className={styles["toggle__switch"]}>
        <div className={styles["toggle__circle"]}></div>
      </div>
      D
    </label>
  </div>
);

export default Toggle_nose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_nose = () => (
         <div>
          <input type="checkbox" name="check-toggle" id="checkbox" hidden="" />
<label for="checkbox" className="toggle">
  G
  <div className="toggle__switch">
      <div className="toggle__circle"></div>
  </div>
  D
</label>
        </div>
        );

        export default Toggle_nose;
        
        
         */
}

import React from "react";
import styles from "./Toggle_cat.module.css";

const Toggle_cat = () => (
  <div>
    <div className={styles["checkbox-apple"]}>
      <input className={styles["yep"]} id="check-apple" type="checkbox" />
      <label for="check-apple"></label>
    </div>
  </div>
);

export default Toggle_cat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_cat = () => (
         <div>
          <div className="checkbox-apple">
  <input className="yep" id="check-apple" type="checkbox" />
  <label for="check-apple"></label>
</div>
        </div>
        );

        export default Toggle_cat;
        
        
         */
}

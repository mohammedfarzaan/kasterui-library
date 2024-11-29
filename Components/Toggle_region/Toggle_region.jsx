import React from "react";
import styles from "./Toggle_region.module.css";

const Toggle_region = () => (
  <div>
    <div className={styles["container"]}>
      <input id="checkbox" name="checkbox" type="checkbox" />
      <label className={styles["label"]} for="checkbox"></label>
    </div>
  </div>
);

export default Toggle_region;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_region = () => (
         <div>
          <div className="container">
  <input id="checkbox" name="checkbox" type="checkbox" />
  <label className="label" for="checkbox">
            </label>

</div>
        </div>
        );

        export default Toggle_region;
        
        
         */
}

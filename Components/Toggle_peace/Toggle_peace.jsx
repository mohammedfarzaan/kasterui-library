import React from "react";
import styles from "./Toggle_peace.module.css";

const Toggle_peace = () => (
  <div>
    <label for="filter" className={styles["switch"]} aria-label="Toggle Filter">
      <input type="checkbox" id="filter" />
      <span>Latest</span>
      <span>Popular</span>
    </label>
  </div>
);

export default Toggle_peace;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_peace = () => (
         <div>
          <label for="filter" className="switch" aria-label="Toggle Filter">
  <input type="checkbox" id="filter" />
  <span>Latest</span>
  <span>Popular</span>
</label>
        </div>
        );

        export default Toggle_peace;
        
        
         */
}

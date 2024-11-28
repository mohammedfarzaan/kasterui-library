import React from "react";
import styles from "./Toggle_park.module.css";

const Toggle_park = () => (
  <div>
    <label for="check">
      <input checked="" id="check" type="checkbox" />
      <div className={styles["check-bg"]}>
        <span className={styles["check-span"]}></span>
      </div>
    </label>
  </div>
);

export default Toggle_park;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_park = () => (
         <div>
          <label for="check">
  <input checked="" id="check" type="checkbox" />
  <div className="check-bg">
    <span className="check-span"></span>
  </div>
</label>
        </div>
        );

        export default Toggle_park;
        
        
         */
}

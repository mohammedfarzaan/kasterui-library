import React from "react";
import styles from "./Toggle_along.module.css";

const Toggle_along = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}>
        <span className={styles["yolk"]}> </span>
        <span className={styles["back"]}> </span>
      </span>
    </label>
  </div>
);

export default Toggle_along;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_along = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider">
    <span className="yolk"> </span>
    <span className="back"> </span>
  </span>
</label>
        </div>
        );

        export default Toggle_along;
        
        
         */
}

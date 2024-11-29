import React from "react";
import styles from "./Radio_rays.module.css";

const Radio_rays = () => (
  <div>
    <div className={styles["btn-group"]}>
      <button className={styles["btn"] + styles["left"]} type="button">
        Left
      </button>
      <button className={styles["btn"] + styles["middle"]} type="button">
        Middle
      </button>
      <button className={styles["btn"] + styles["right"]} type="button">
        Right
      </button>
    </div>
  </div>
);

export default Radio_rays;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_rays = () => (
         <div>
          <div className="btn-group">
  <button className="btn left" type="button">Left</button>
  <button className="btn middle" type="button">Middle</button>
  <button className="btn right" type="button">Right</button>
</div>
        </div>
        );

        export default Radio_rays;
        
        
         */
}

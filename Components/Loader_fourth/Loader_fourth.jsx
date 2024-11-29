import React from "react";
import styles from "./Loader_fourth.module.css";

const Loader_fourth = () => (
  <div>
    <div className={styles["loader"]}>
      <svg viewBox="0 0 80 80">
        <circle r="32" cy="40" cx="40" id="test"></circle>
      </svg>
    </div>

    <div className={styles["loader"] + styles["triangle"]}>
      <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
      </svg>
    </div>

    <div className={styles["loader"]}>
      <svg viewBox="0 0 80 80">
        <rect height="64" width="64" y="8" x="8"></rect>
      </svg>
    </div>
  </div>
);

export default Loader_fourth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fourth = () => (
         <div>
          <div className="loader">
  <svg viewBox="0 0 80 80">
    <circle r="32" cy="40" cx="40" id="test"></circle>
  </svg>
</div>

<div className="loader triangle">
  <svg viewBox="0 0 86 80">
    <polygon points="43 8 79 72 7 72"></polygon>
  </svg>
</div>

<div className="loader">
  <svg viewBox="0 0 80 80">
    <rect height="64" width="64" y="8" x="8"></rect>
  </svg>
</div>
        </div>
        );

        export default Loader_fourth;
        
        
         */
}

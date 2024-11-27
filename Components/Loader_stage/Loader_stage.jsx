import React from "react";
import styles from "./Loader_stage.module.css";

const Loader_stage = () => (
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

export default Loader_stage;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_stage = () => (
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

        export default Loader_stage;
        
        
         */
}

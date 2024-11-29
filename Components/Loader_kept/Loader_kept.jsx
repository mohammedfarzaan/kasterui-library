import React from "react";
import styles from "./Loader_kept.module.css";

const Loader_kept = () => (
  <div>
    <div className={styles["loader"]}>
      <figure className={styles["iconLoaderProgress"]}>
        <svg
          className={styles["iconLoaderProgressFirst"]}
          width="240"
          height="240"
        >
          <circle cx="120" cy="120" r="100"></circle>
        </svg>

        <svg
          className={styles["iconLoaderProgressSecond"]}
          width="240"
          height="240"
        >
          <circle cx="120" cy="120" r="100"></circle>
        </svg>
      </figure>
    </div>
  </div>
);

export default Loader_kept;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_kept = () => (
         <div>
          <div className="loader">
  <figure className="iconLoaderProgress">
    <svg className="iconLoaderProgressFirst" width="240" height="240">
      <circle cx="120" cy="120" r="100"></circle>
    </svg>

    <svg className="iconLoaderProgressSecond" width="240" height="240">
      <circle cx="120" cy="120" r="100"></circle>
    </svg>
  </figure>
</div>
        </div>
        );

        export default Loader_kept;
        
        
         */
}

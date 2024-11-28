import React from "react";
import styles from "./Loader_toy.module.css";

const Loader_toy = () => (
  <div>
    <div className={styles["loading-container"]}>
      <div className={styles["loader"]}>
        <div className={styles["spinner"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_toy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_toy = () => (
         <div>
          <div className="loading-container">
  <div className="loader">
    <div className="spinner"></div>
  </div>
</div>
        </div>
        );

        export default Loader_toy;
        
        
         */
}

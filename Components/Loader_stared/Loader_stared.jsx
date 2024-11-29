import React from "react";
import styles from "./Loader_stared.module.css";

const Loader_stared = () => (
  <div>
    <div className={styles["progress-loader"]}>
      <div className={styles["progress"]}></div>
    </div>
  </div>
);

export default Loader_stared;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_stared = () => (
         <div>
          <div className="progress-loader">
    <div className="progress"></div>
</div>
        </div>
        );

        export default Loader_stared;
        
        
         */
}

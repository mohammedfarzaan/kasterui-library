import React from "react";
import styles from "./Loader_pupil.module.css";

const Loader_pupil = () => (
  <div>
    <div className={styles["progress-loader"]}>
      <div className={styles["progress"]}></div>
    </div>
  </div>
);

export default Loader_pupil;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_pupil = () => (
         <div>
          <div className="progress-loader">
    <div className="progress"></div>
</div>
        </div>
        );

        export default Loader_pupil;
        
        
         */
}
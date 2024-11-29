import React from "react";
import styles from "./Loader_fifty.module.css";

const Loader_fifty = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_fifty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fifty = () => (
         <div>
          <div className="loader">
    <div className="ball"></div>
    <div className="ball"></div>
    <div className="ball"></div>
</div>
        </div>
        );

        export default Loader_fifty;
        
        
         */
}

import React from "react";
import styles from "./Loader_lucky.module.css";

const Loader_lucky = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
    </div>
  </div>
);

export default Loader_lucky;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_lucky = () => (
         <div>
          <div className="container">
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
</div>
        </div>
        );

        export default Loader_lucky;
        
        
         */
}

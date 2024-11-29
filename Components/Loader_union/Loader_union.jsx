import React from "react";
import styles from "./Loader_union.module.css";

const Loader_union = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-circle"]}></div>
      <div className={styles["loader-circle"]}></div>
      <div className={styles["loader-circle"]}></div>
    </div>
  </div>
);

export default Loader_union;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_union = () => (
         <div>
          <div className="loader">
  <div className="loader-circle"></div>
  <div className="loader-circle"></div>
  <div className="loader-circle"></div>
</div>
        </div>
        );

        export default Loader_union;
        
        
         */
}

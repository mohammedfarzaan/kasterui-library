import React from "react";
import styles from "./Loader_loose.module.css";

const Loader_loose = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["spinner1"]}></div>
    </div>
  </div>
);

export default Loader_loose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_loose = () => (
         <div>
          <div className="spinner">
    <div className="spinner1"></div>
</div>
        </div>
        );

        export default Loader_loose;
        
        
         */
}

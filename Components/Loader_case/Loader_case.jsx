import React from "react";
import styles from "./Loader_case.module.css";

const Loader_case = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["Spinner"]}></div>
    </div>
  </div>
);

export default Loader_case;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_case = () => (
         <div>
          <div className="spinner">
    <div className="Spinner"></div>
    </div>
        </div>
        );

        export default Loader_case;
        
        
         */
}

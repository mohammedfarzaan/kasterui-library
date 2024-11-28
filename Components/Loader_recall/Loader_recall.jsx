import React from "react";
import styles from "./Loader_recall.module.css";

const Loader_recall = () => (
  <div>
    <div className={styles["ball"]}></div>
    <div className={styles["shadow"]}></div>
  </div>
);

export default Loader_recall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_recall = () => (
         <div>
          <div className="ball"></div>
<div className="shadow"></div>
        </div>
        );

        export default Loader_recall;
        
        
         */
}
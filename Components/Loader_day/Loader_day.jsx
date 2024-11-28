import React from "react";
import styles from "./Loader_day.module.css";

const Loader_day = () => (
  <div>
    <div className={styles["lds-hourglass"]}></div>
  </div>
);

export default Loader_day;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_day = () => (
         <div>
          <div className="lds-hourglass"></div>
        </div>
        );

        export default Loader_day;
        
        
         */
}

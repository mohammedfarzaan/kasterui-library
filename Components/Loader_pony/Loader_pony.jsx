import React from "react";
import styles from "./Loader_pony.module.css";

const Loader_pony = () => (
  <div>
    <div className={styles["glitch"]} data-text="Loading ...">
      Loading ...
    </div>
  </div>
);

export default Loader_pony;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_pony = () => (
         <div>
          <div className="glitch" data-text="Loading ...">Loading ...</div>
        </div>
        );

        export default Loader_pony;
        
        
         */
}

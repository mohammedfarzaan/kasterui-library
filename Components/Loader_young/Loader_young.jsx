import React from "react";
import styles from "./Loader_young.module.css";

const Loader_young = () => (
  <div>
    <div className={styles["div"]}>
      <p id="h2">
        Loading....<span id="lol"></span>
      </p>
    </div>
  </div>
);

export default Loader_young;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_young = () => (
         <div>
          <div className="div">
  <p id="h2">Loading....<span id="lol"></span></p>
</div>
        </div>
        );

        export default Loader_young;
        
        
         */
}
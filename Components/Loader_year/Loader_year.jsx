import React from "react";
import styles from "./Loader_year.module.css";

const Loader_year = () => (
  <div>
    <div className={styles["loader"]}>
      Loading
      <span></span>
    </div>
  </div>
);

export default Loader_year;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_year = () => (
         <div>
          <div className="loader">Loading
  <span></span>
</div>
        </div>
        );

        export default Loader_year;
        
        
         */
}

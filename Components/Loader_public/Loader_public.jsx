import React from "react";
import styles from "./Loader_public.module.css";

const Loader_public = () => (
  <div>
    <div className={styles["center-body"]}>
      <div className={styles["loader-shape-3"]}></div>
    </div>
  </div>
);

export default Loader_public;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_public = () => (
         <div>
          <div className="center-body">
  <div className="loader-shape-3"></div>
</div>
        </div>
        );

        export default Loader_public;
        
        
         */
}

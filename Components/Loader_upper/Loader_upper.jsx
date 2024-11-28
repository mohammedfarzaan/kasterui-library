import React from "react";
import styles from "./Loader_upper.module.css";

const Loader_upper = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["shape"]}></div>
    </div>
  </div>
);

export default Loader_upper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_upper = () => (
         <div>
          <div className="loader">
  <div className="shape"></div>
</div>
        </div>
        );

        export default Loader_upper;
        
        
         */
}

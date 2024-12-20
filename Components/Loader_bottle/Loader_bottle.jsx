import React from "react";
import styles from "./Loader_bottle.module.css";

const Loader_bottle = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-small"]}></div>
      <div className={styles["loader-large"]}></div>
    </div>
  </div>
);

export default Loader_bottle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bottle = () => (
         <div>
          <div className="loader">
  <div className="loader-small"></div>
  <div className="loader-large"></div>
</div>
        </div>
        );

        export default Loader_bottle;
        
        
         */
}

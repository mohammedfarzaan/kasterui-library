import React from "react";
import styles from "./Loader_almost.module.css";

const Loader_almost = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["layer"]}>loading</div>
      <div className={styles["layer"]}>loading</div>
    </div>
  </div>
);

export default Loader_almost;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_almost = () => (
         <div>
          <div className="loader">
  <div className="layer">loading</div>
  <div className="layer">loading</div>
</div>
        </div>
        );

        export default Loader_almost;
        
        
         */
}

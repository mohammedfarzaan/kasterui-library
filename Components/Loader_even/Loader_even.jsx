import React from "react";
import styles from "./Loader_even.module.css";

const Loader_even = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_even;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_even = () => (
         <div>
          <div className="loader">
  <div className="inner">
  </div>
</div>
        </div>
        );

        export default Loader_even;
        
        
         */
}

import React from "react";
import styles from "./Loader_mirror.module.css";

const Loader_mirror = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["light"]}></div>
      <div className={styles["black_overlay"]}></div>
    </div>
  </div>
);

export default Loader_mirror;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_mirror = () => (
         <div>
          <div className="loader">
  <div className="light"></div>
  <div className="black_overlay"></div>
</div>
        </div>
        );

        export default Loader_mirror;
        
        
         */
}

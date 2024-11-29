import React from "react";
import styles from "./Loader_build.module.css";

const Loader_build = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["dot-one"]}></div>
      <div className={styles["dot-two"]}>- -</div>
      <div className={styles["dot-three"]}></div>
    </div>
  </div>
);

export default Loader_build;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_build = () => (
         <div>
          <div className="loader">
 <div className="dot-one"></div> 
 <div className="dot-two">-  -</div> 
 <div className="dot-three"></div> 
</div>
        </div>
        );

        export default Loader_build;
        
        
         */
}

import React from "react";
import styles from "./Loader_joined.module.css";

const Loader_joined = () => (
  <div>
    <div className={styles["frame"]}>
      <div className={styles["center"]}>
        <div className={styles["dot-1"]}></div>
        <div className={styles["dot-2"]}></div>
        <div className={styles["dot-3"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_joined;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_joined = () => (
         <div>
          <div className="frame">
   <div className="center">
      <div className="dot-1"></div>
      <div className="dot-2"></div>
      <div className="dot-3"></div>
   </div>
</div>
        </div>
        );

        export default Loader_joined;
        
        
         */
}

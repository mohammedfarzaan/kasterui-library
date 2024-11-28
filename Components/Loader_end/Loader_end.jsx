import React from "react";
import styles from "./Loader_end.module.css";

const Loader_end = () => (
  <div>
    <div className={styles["loaderContainer"]}>
      <div className={styles["particleContainer"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["particleContainer"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader_end;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_end = () => (
         <div>
          <div className="loaderContainer">
  <div className="particleContainer">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="particleContainer">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
        </div>
        );

        export default Loader_end;
        
        
         */
}

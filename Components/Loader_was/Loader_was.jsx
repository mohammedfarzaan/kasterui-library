import React from "react";
import styles from "./Loader_was.module.css";

const Loader_was = () => (
  <div>
    <div className={styles["center-body"]}>
      <div className={styles["loader-spanne-20"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default Loader_was;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_was = () => (
         <div>
          <div className="center-body">
  <div className="loader-spanne-20">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
        </div>
        );

        export default Loader_was;
        
        
         */
}

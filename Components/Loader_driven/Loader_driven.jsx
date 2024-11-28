import React from "react";
import styles from "./Loader_driven.module.css";

const Loader_driven = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
    </div>
  </div>
);

export default Loader_driven;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_driven = () => (
         <div>
          <div className="loader">
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
</div>
        </div>
        );

        export default Loader_driven;
        
        
         */
}

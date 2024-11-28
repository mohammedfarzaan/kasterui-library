import React from "react";
import styles from "./Loader_zebra.module.css";

const Loader_zebra = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["loader-text"]}>loading</span>
      <span className={styles["load"]}></span>
    </div>
  </div>
);

export default Loader_zebra;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_zebra = () => (
         <div>
          <div className="loader">
    <span className="loader-text">loading</span>
      <span className="load"></span>
  </div>
        </div>
        );

        export default Loader_zebra;
        
        
         */
}
import React from "react";
import styles from "./Loader_range.module.css";

const Loader_range = () => (
  <div>
    <figure className={styles["loader"]}>
      <div className={styles["dot"] + styles["white"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </figure>
  </div>
);

export default Loader_range;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_range = () => (
         <div>
          <figure className="loader">
    <div className="dot white"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
</figure>
        </div>
        );

        export default Loader_range;
        
        
         */
}

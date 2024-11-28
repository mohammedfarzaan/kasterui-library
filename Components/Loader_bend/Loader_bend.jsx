import React from "react";
import styles from "./Loader_bend.module.css";

const Loader_bend = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
    </div>
  </div>
);

export default Loader_bend;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bend = () => (
         <div>
          <div className="loader">
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
</div>
        </div>
        );

        export default Loader_bend;
        
        
         */
}

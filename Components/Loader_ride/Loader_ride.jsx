import React from "react";
import styles from "./Loader_ride.module.css";

const Loader_ride = () => (
  <div>
    <div className={styles["loader"]}>
      <p className={styles["heading"]}>Loading</p>
      <div className={styles["loading"]}>
        <div className={styles["load"]}></div>
        <div className={styles["load"]}></div>
        <div className={styles["load"]}></div>
        <div className={styles["load"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_ride;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_ride = () => (
         <div>
          <div className="loader">
  <p className="heading">Loading</p>
  <div className="loading">
    <div className="load"></div>
    <div className="load"></div>
    <div className="load"></div>
    <div className="load"></div>
  </div>
</div>
        </div>
        );

        export default Loader_ride;
        
        
         */
}

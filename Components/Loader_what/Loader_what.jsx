import React from "react";
import styles from "./Loader_what.module.css";

const Loader_what = () => (
  <div>
    <div className={styles["cube"] + styles["div"]}>
      <div className={styles["top"] + styles["div"]}></div>
      <div className={styles["div"]}>
        <span className={styles["span"]} style="--i: 0">
          <p>loading..</p>
          <p>loading..</p>
        </span>
        <span className={styles["span"]} style="--i: 1">
          <p>loading..</p>
          <p>loading..</p>
        </span>
        <span className={styles["span"]} style="--i: 2">
          <p>loading..</p>
          <p>loading..</p>
        </span>
        <span className={styles["span"]} style="--i: 3">
          <p>loading..</p>
          <p>loading..</p>
        </span>
      </div>
    </div>
  </div>
);

export default Loader_what;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_what = () => (
         <div>
          <div className="cube div">
    <div className="top div"></div>
    <div className="div">
      <span className="span" style="--i: 0">
        <p>loading..</p>
        <p>loading..</p>
      </span>
      <span className="span" style="--i: 1">
        <p>loading..</p>
        <p>loading..</p>
      </span>
      <span className="span" style="--i: 2">
        <p>loading..</p>
        <p>loading..</p>
      </span>
      <span className="span" style="--i: 3">
        <p>loading..</p>
        <p>loading..</p>
      </span>
    </div>
</div>
        </div>
        );

        export default Loader_what;
        
        
         */
}

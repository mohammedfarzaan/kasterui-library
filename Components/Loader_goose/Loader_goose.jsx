import React from "react";
import styles from "./Loader_goose.module.css";

const Loader_goose = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["dot"] + styles["dot-1"]}></div>
      <div className={styles["dot"] + styles["dot-2"]}></div>
      <div className={styles["dot"] + styles["dot-3"]}></div>
      <div className={styles["dot"] + styles["dot-4"]}></div>
      <div className={styles["dot"] + styles["dot-5"]}></div>
    </div>
  </div>
);

export default Loader_goose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_goose = () => (
         <div>
          <div className="loader">
  <div className="dot dot-1"></div>
  <div className="dot dot-2"></div>
  <div className="dot dot-3"></div>
  <div className="dot dot-4"></div>
  <div className="dot dot-5"></div>
</div>
        </div>
        );

        export default Loader_goose;
        
        
         */
}

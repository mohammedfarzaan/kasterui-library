import React from "react";
import styles from "./Loader_proud.module.css";

const Loader_proud = () => (
  <div>
    <div className={styles["spinner"]}>
      <span className={styles["spinner-part-0"]}></span>
      <span className={styles["spinner-part-1"]}></span>
      <span className={styles["spinner-part-2"]}></span>
      <span className={styles["spinner-part-3"]}></span>
      <span className={styles["spinner-part-0"]}></span>
      <span className={styles["spinner-part-1"]}></span>
      <span className={styles["spinner-part-2"]}></span>
      <span className={styles["spinner-part-3"]}></span>
    </div>
  </div>
);

export default Loader_proud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_proud = () => (
         <div>
          <div className="spinner">
  <span className="spinner-part-0"></span>
  <span className="spinner-part-1"></span>
  <span className="spinner-part-2"></span>
  <span className="spinner-part-3"></span>
  <span className="spinner-part-0"></span>
  <span className="spinner-part-1"></span>
  <span className="spinner-part-2"></span>
  <span className="spinner-part-3"></span>
</div>
        </div>
        );

        export default Loader_proud;
        
        
         */
}

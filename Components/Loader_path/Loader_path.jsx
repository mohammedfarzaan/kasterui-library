import React from "react";
import styles from "./Loader_path.module.css";

const Loader_path = () => (
  <div>
    <div className={styles["dot-spinner"]}>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
    </div>
  </div>
);

export default Loader_path;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_path = () => (
         <div>
          <div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>
        </div>
        );

        export default Loader_path;
        
        
         */
}

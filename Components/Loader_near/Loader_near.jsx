import React from "react";
import styles from "./Loader_near.module.css";

const Loader_near = () => (
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

export default Loader_near;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_near = () => (
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

        export default Loader_near;
        
        
         */
}

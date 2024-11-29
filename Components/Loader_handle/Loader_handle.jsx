import React from "react";
import styles from "./Loader_handle.module.css";

const Loader_handle = () => (
  <div>
    <div id="wifi-loader">
      <svg className={styles["circle-outer"]} viewBox="0 0 86 86">
        <circle className={styles["back"]} cx="43" cy="43" r="40"></circle>
        <circle className={styles["front"]} cx="43" cy="43" r="40"></circle>
        <circle className={styles["new"]} cx="43" cy="43" r="40"></circle>
      </svg>
      <svg className={styles["circle-middle"]} viewBox="0 0 60 60">
        <circle className={styles["back"]} cx="30" cy="30" r="27"></circle>
        <circle className={styles["front"]} cx="30" cy="30" r="27"></circle>
      </svg>
      <svg className={styles["circle-inner"]} viewBox="0 0 34 34">
        <circle className={styles["back"]} cx="17" cy="17" r="14"></circle>
        <circle className={styles["front"]} cx="17" cy="17" r="14"></circle>
      </svg>
      <div className={styles["text"]} data-text="Searching"></div>
    </div>
  </div>
);

export default Loader_handle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_handle = () => (
         <div>
          <div id="wifi-loader">
    <svg className="circle-outer" viewBox="0 0 86 86">
        <circle className="back" cx="43" cy="43" r="40"></circle>
        <circle className="front" cx="43" cy="43" r="40"></circle>
        <circle className="new" cx="43" cy="43" r="40"></circle>
    </svg>
    <svg className="circle-middle" viewBox="0 0 60 60">
        <circle className="back" cx="30" cy="30" r="27"></circle>
        <circle className="front" cx="30" cy="30" r="27"></circle>
    </svg>
    <svg className="circle-inner" viewBox="0 0 34 34">
        <circle className="back" cx="17" cy="17" r="14"></circle>
        <circle className="front" cx="17" cy="17" r="14"></circle>
    </svg>
    <div className="text" data-text="Searching"></div>
</div>
        </div>
        );

        export default Loader_handle;
        
        
         */
}

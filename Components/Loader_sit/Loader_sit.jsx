import React from "react";
import styles from "./Loader_sit.module.css";

const Loader_sit = () => (
  <div>
    <div id="container">
      <div id="square" className={styles["shimmer"]}></div>
      <div id="content">
        <div id="content-title" className={styles["shimmer"]}></div>
        <div id="content-desc">
          <div className={styles["line"] + styles["shimmer"]}></div>
          <div className={styles["line"] + styles["shimmer"]}></div>
          <div className={styles["line"] + styles["shimmer"]}></div>
          <div className={styles["line"] + styles["shimmer"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_sit;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sit = () => (
         <div>
          <div id="container">
  <div id="square" className="shimmer"></div>
  <div id="content">
    <div id="content-title" className="shimmer"></div>
    <div id="content-desc">
      <div className="line shimmer"></div>
      <div className="line shimmer"></div>
      <div className="line shimmer"></div>
      <div className="line shimmer"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_sit;
        
        
         */
}

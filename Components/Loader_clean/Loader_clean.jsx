import React from "react";
import styles from "./Loader_clean.module.css";

const Loader_clean = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["folder"]}>
        <div className={styles["top"]}></div>
        <div className={styles["bottom"]}></div>
      </div>
      <div className={styles["title"]}>getting files ready...</div>
    </div>
  </div>
);

export default Loader_clean;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_clean = () => (
         <div>
          <div className="container">
  <div className="folder">
    <div className="top"></div>
    <div className="bottom"></div>
  </div>
  <div className="title">getting files ready...</div>
</div>
        </div>
        );

        export default Loader_clean;
        
        
         */
}

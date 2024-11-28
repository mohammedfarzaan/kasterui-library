import React from "react";
import styles from "./Loader_ill.module.css";

const Loader_ill = () => (
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

export default Loader_ill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_ill = () => (
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

        export default Loader_ill;
        
        
         */
}

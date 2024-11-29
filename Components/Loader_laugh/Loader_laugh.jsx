import React from "react";
import styles from "./Loader_laugh.module.css";

const Loader_laugh = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["half"]}></div>
      <div className={styles["half"]}></div>
    </div>
  </div>
);

export default Loader_laugh;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_laugh = () => (
         <div>
          <div className="container">
  <div className="half"></div>
  <div className="half"></div>
</div>
        </div>
        );

        export default Loader_laugh;
        
        
         */
}

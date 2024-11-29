import React from "react";
import styles from "./Loader_bring.module.css";

const Loader_bring = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["diamond"]}></div>
      <div className={styles["diamond"] + styles["middle"]}></div>
      <div className={styles["diamond"]}></div>
    </div>
  </div>
);

export default Loader_bring;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bring = () => (
         <div>
          <div className="loading">
  <div className="diamond"></div>
  <div className="diamond middle"></div>
  <div className="diamond"></div>
</div>
        </div>
        );

        export default Loader_bring;
        
        
         */
}

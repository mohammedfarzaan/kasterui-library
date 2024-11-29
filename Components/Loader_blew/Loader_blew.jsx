import React from "react";
import styles from "./Loader_blew.module.css";

const Loader_blew = () => (
  <div>
    <div className={styles["lava-lamp"]}>
      <div className={styles["bubble"]}></div>
      <div className={styles["bubble1"]}></div>
      <div className={styles["bubble2"]}></div>
      <div className={styles["bubble3"]}></div>
    </div>
  </div>
);

export default Loader_blew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_blew = () => (
         <div>
          <div className="lava-lamp">
  <div className="bubble"></div>
  <div className="bubble1"></div>
  <div className="bubble2"></div>
  <div className="bubble3"></div>
</div>
        </div>
        );

        export default Loader_blew;
        
        
         */
}

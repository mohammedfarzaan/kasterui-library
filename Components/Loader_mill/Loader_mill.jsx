import React from "react";
import styles from "./Loader_mill.module.css";

const Loader_mill = () => (
  <div>
    <div className={styles["sharingon"]}>
      <div className={styles["ring"]}>
        <div className={styles["to"]}></div>
        <div className={styles["to"]}></div>
        <div className={styles["to"]}></div>
        <div className={styles["circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_mill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_mill = () => (
         <div>
          <div className="sharingon">
  <div className="ring">
  <div className="to"></div>
<div className="to"></div>
<div className="to"></div>
<div className="circle"></div>
</div>
</div>
        </div>
        );

        export default Loader_mill;
        
        
         */
}

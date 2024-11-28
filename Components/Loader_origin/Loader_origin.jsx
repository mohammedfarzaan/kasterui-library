import React from "react";
import styles from "./Loader_origin.module.css";

const Loader_origin = () => (
  <div>
    <div className={styles["leap-frog"]}>
      <div className={styles["leap-frog__dot"]}></div>
      <div className={styles["leap-frog__dot"]}></div>
      <div className={styles["leap-frog__dot"]}></div>
    </div>
  </div>
);

export default Loader_origin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_origin = () => (
         <div>
          <div className="leap-frog">
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
</div>
        </div>
        );

        export default Loader_origin;
        
        
         */
}

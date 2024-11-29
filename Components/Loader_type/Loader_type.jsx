import React from "react";
import styles from "./Loader_type.module.css";

const Loader_type = () => (
  <div>
    <div className={styles["leap-frog"]}>
      <div className={styles["leap-frog__dot"]}></div>
      <div className={styles["leap-frog__dot"]}></div>
      <div className={styles["leap-frog__dot"]}></div>
    </div>
  </div>
);

export default Loader_type;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_type = () => (
         <div>
          <div className="leap-frog">
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
</div>
        </div>
        );

        export default Loader_type;
        
        
         */
}

import React from "react";
import styles from "./Loader_add.module.css";

const Loader_add = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["conic_back1"]}></div>
      <div className={styles["conic_back2"]}></div>
    </div>
  </div>
);

export default Loader_add;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_add = () => (
         <div>
          <div className="card">
  <div className="conic_back1"></div>
  <div className="conic_back2"></div>
</div>
        </div>
        );

        export default Loader_add;
        
        
         */
}

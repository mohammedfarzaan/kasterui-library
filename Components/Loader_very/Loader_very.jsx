import React from "react";
import styles from "./Loader_very.module.css";

const Loader_very = () => (
  <div>
    <div className={styles["cell"]}>
      <div className={styles["card"]}>
        <span className={styles["flower-loader"]}>Loading…</span>
      </div>
    </div>
  </div>
);

export default Loader_very;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_very = () => (
         <div>
          <div className="cell">
  <div className="card">
    <span className="flower-loader">Loading…</span>
  </div>
</div>
        </div>
        );

        export default Loader_very;
        
        
         */
}
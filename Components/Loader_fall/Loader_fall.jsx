import React from "react";
import styles from "./Loader_fall.module.css";

const Loader_fall = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["intern"]}></div>
      <div className={styles["external-shadow"]}>
        <div className={styles["central"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_fall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fall = () => (
         <div>
          <div className="loader">
      <div className="intern">
      </div>
  <div className="external-shadow">
    <div className="central">
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_fall;
        
        
         */
}

import React from "react";
import styles from "./Loader_swim.module.css";

const Loader_swim = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cercle"]}></div>
      <div className={styles["cercle"]}></div>
      <div className={styles["cercle"]}></div>
      <div className={styles["cercle"]}></div>
    </div>
  </div>
);

export default Loader_swim;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_swim = () => (
         <div>
          <div className="loader">

  <div className="cercle">
  </div>
  <div className="cercle">
  </div>
  <div className="cercle">
  </div>
  <div className="cercle">
  </div>

</div>
        </div>
        );

        export default Loader_swim;
        
        
         */
}

import React from "react";
import styles from "./Loader_shout.module.css";

const Loader_shout = () => (
  <div>
    <div className={styles["loader"]}>
      <li className={styles["ball"]}></li>
      <li className={styles["ball"]}></li>
      <li className={styles["ball"]}></li>
    </div>
  </div>
);

export default Loader_shout;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_shout = () => (
         <div>
          <div className="loader">
  <li className="ball"></li>
  <li className="ball"></li>
  <li className="ball"></li>
</div>
        </div>
        );

        export default Loader_shout;
        
        
         */
}

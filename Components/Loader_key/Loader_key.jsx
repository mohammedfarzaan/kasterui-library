import React from "react";
import styles from "./Loader_key.module.css";

const Loader_key = () => (
  <div>
    <div className={styles["loader"]}>
      <li className={styles["dots"]} id="dot-1"></li>
      <li className={styles["dots"]} id="dot-2"></li>
      <li className={styles["dots"]} id="dot-3"></li>
    </div>
  </div>
);

export default Loader_key;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_key = () => (
         <div>
          <div className="loader">
        <li className="dots" id="dot-1"></li>
        <li className="dots" id="dot-2"></li>
        <li className="dots" id="dot-3"></li>
    </div>
        </div>
        );

        export default Loader_key;
        
        
         */
}

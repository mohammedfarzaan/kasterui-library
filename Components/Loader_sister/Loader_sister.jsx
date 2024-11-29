import React from "react";
import styles from "./Loader_sister.module.css";

const Loader_sister = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["magnetism"]}></div>
    </div>
  </div>
);

export default Loader_sister;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sister = () => (
         <div>
          <div className="loader">
  <div className="magnetism"></div>
</div>
        </div>
        );

        export default Loader_sister;
        
        
         */
}

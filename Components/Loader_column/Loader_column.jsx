import React from "react";
import styles from "./Loader_column.module.css";

const Loader_column = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-small"]}></div>
      <div className={styles["loader-large"]}></div>
    </div>
  </div>
);

export default Loader_column;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_column = () => (
         <div>
          <div className="loader">
  <div className="loader-small"></div>
  <div className="loader-large"></div>
</div>
        </div>
        );

        export default Loader_column;
        
        
         */
}

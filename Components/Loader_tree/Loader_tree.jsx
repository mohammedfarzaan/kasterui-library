import React from "react";
import styles from "./Loader_tree.module.css";

const Loader_tree = () => (
  <div>
    <div className={styles["bar"]}>
      <div className={styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_tree;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_tree = () => (
         <div>
          <div className="bar">
    <div className="ball"></div>
</div>
        </div>
        );

        export default Loader_tree;
        
        
         */
}

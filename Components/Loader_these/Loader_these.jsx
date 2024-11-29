import React from "react";
import styles from "./Loader_these.module.css";

const Loader_these = () => (
  <div>
    <svg className={styles["svg"]}>
      <path className={styles["path"]}></path>
    </svg>
    <svg>
      <path></path>
    </svg>
  </div>
);

export default Loader_these;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_these = () => (
         <div>
          <svg className="svg">
      <path className="path"></path>
   </svg>
   <svg>
      <path></path>
   </svg>
        </div>
        );

        export default Loader_these;
        
        
         */
}

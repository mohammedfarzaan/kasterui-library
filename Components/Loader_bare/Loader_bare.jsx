import React from "react";
import styles from "./Loader_bare.module.css";

const Loader_bare = () => (
  <div>
    <div className={styles["typewriter"]}>
      <div className={styles["slide"]}>
        <i></i>
      </div>
      <div className={styles["paper"]}></div>
      <div className={styles["keyboard"]}></div>
    </div>
  </div>
);

export default Loader_bare;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bare = () => (
         <div>
          <div className="typewriter">
    <div className="slide"><i></i></div>
    <div className="paper"></div>
    <div className="keyboard"></div>
</div>
        </div>
        );

        export default Loader_bare;
        
        
         */
}

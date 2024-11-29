import React from "react";
import styles from "./Loader_peace.module.css";

const Loader_peace = () => (
  <div>
    <div className={styles["progress"]}>
      <div className={styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_peace;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_peace = () => (
         <div>
          <div className="progress">
      <div className="inner"></div>
</div>
        </div>
        );

        export default Loader_peace;
        
        
         */
}

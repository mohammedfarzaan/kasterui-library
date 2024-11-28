import React from "react";
import styles from "./Loader_stood.module.css";

const Loader_stood = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["i"]}></div>
      <div className={styles["a"]}></div>
      <div className={styles["u"]}></div>
    </div>
  </div>
);

export default Loader_stood;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_stood = () => (
         <div>
          <div className="loading">
    <div className="i"></div>
    <div className="a"></div>
    <div className="u"></div>
</div>
        </div>
        );

        export default Loader_stood;
        
        
         */
}

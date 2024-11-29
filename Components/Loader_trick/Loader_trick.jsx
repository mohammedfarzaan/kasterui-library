import React from "react";
import styles from "./Loader_trick.module.css";

const Loader_trick = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["react-star"]}>
        <div className={styles["nucleus"]}></div>
        <div className={styles["electron"] + styles["electron1"]}></div>
        <div className={styles["electron"] + styles["electron2"]}></div>
        <div className={styles["electron"] + styles["electron3"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_trick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_trick = () => (
         <div>
          <div className="loader">
  <div className="react-star">
    <div className="nucleus"></div>
    <div className="electron electron1"></div>
    <div className="electron electron2"></div>
    <div className="electron electron3"></div>
  </div>
</div>
        </div>
        );

        export default Loader_trick;
        
        
         */
}

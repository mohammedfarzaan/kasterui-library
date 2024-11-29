import React from "react";
import styles from "./Loader_front.module.css";

const Loader_front = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-text"]}>Loading...</div>
      <div className={styles["loader-bar"]}></div>
    </div>
  </div>
);

export default Loader_front;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_front = () => (
         <div>
          <div className="loader">
  <div className="loader-text">Loading...</div>
  <div className="loader-bar"></div>
</div>
        </div>
        );

        export default Loader_front;
        
        
         */
}

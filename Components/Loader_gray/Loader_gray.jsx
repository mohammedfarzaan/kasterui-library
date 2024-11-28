import React from "react";
import styles from "./Loader_gray.module.css";

const Loader_gray = () => (
  <div>
    <button className={styles["loader__btn"]}>
      <div className={styles["loader"]}></div>
      Loading ...
    </button>
  </div>
);

export default Loader_gray;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_gray = () => (
         <div>
          <button className="loader__btn">
  <div className="loader"></div>
  Loading ...
</button>
        </div>
        );

        export default Loader_gray;
        
        
         */
}

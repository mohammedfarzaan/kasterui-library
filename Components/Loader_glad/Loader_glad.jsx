import React from "react";
import styles from "./Loader_glad.module.css";

const Loader_glad = () => (
  <div>
    <div className={styles["loader"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_glad;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_glad = () => (
         <div>
          <div className="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
        </div>
        );

        export default Loader_glad;
        
        
         */
}

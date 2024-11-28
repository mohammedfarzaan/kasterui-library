import React from "react";
import styles from "./Loader_vast.module.css";

const Loader_vast = () => (
  <div>
    <div className={styles["loader"]}>
      <span>&lt;</span>
      <span>LOADING</span>
      <span>/&gt;</span>
    </div>
  </div>
);

export default Loader_vast;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_vast = () => (
         <div>
          <div className="loader">
  <span>&lt;</span>
  <span>LOADING</span>
  <span>/&gt;</span>
</div>
        </div>
        );

        export default Loader_vast;
        
        
         */
}

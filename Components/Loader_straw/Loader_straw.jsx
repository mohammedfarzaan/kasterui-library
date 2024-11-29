import React from "react";
import styles from "./Loader_straw.module.css";

const Loader_straw = () => (
  <div>
    <div className={styles["ld-ripple"]}>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_straw;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_straw = () => (
         <div>
          <div className="ld-ripple">
  <div></div>
  <div></div>
</div>
        </div>
        );

        export default Loader_straw;
        
        
         */
}

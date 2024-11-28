import React from "react";
import styles from "./Loader_orange.module.css";

const Loader_orange = () => (
  <div>
    <div className={styles["honeycomb"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_orange;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_orange = () => (
         <div>
          <div className="honeycomb">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        </div>
        );

        export default Loader_orange;
        
        
         */
}

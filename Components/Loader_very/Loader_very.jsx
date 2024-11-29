import React from "react";
import styles from "./Loader_very.module.css";

const Loader_very = () => (
  <div>
    <div className={styles["neomorph-spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_very;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_very = () => (
         <div>
          <div className="neomorph-spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        </div>
        );

        export default Loader_very;
        
        
         */
}

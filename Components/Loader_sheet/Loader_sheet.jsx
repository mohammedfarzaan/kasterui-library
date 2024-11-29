import React from "react";
import styles from "./Loader_sheet.module.css";

const Loader_sheet = () => (
  <div>
    <div className={styles["loader"]}>
      <span></span>
    </div>
  </div>
);

export default Loader_sheet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sheet = () => (
         <div>
          <div className="loader">
        <span></span>
</div>
        </div>
        );

        export default Loader_sheet;
        
        
         */
}

import React from "react";
import styles from "./Loader_worse.module.css";

const Loader_worse = () => (
  <div>
    <div className={styles["moon"]}>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Loader_worse;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_worse = () => (
         <div>
          <div className="moon">
  <div className="shadow"></div>
</div>
        </div>
        );

        export default Loader_worse;
        
        
         */
}

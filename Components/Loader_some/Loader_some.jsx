import React from "react";
import styles from "./Loader_some.module.css";

const Loader_some = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["blue"]}></div>
    </div>
  </div>
);

export default Loader_some;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_some = () => (
         <div>
          <div className="loader">
  <div className="blue">
</div></div>
        </div>
        );

        export default Loader_some;
        
        
         */
}
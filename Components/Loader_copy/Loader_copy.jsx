import React from "react";
import styles from "./Loader_copy.module.css";

const Loader_copy = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["item1"]}></div>
      <div className={styles["item2"]}></div>
      <div className={styles["item3"]}></div>
    </div>
  </div>
);

export default Loader_copy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_copy = () => (
         <div>
          <div className="loader">
  <div className="item1"></div>
  <div className="item2"></div>
  <div className="item3"></div>
</div>
        </div>
        );

        export default Loader_copy;
        
        
         */
}

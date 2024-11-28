import React from "react";
import styles from "./Loader_fed.module.css";

const Loader_fed = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"]} id="red"></div>
      <div className={styles["bar"]} id="mint"></div>
      <div className={styles["bar"]} id="grey"></div>
      <div className={styles["bar"]} id="purple"></div>
    </div>
  </div>
);

export default Loader_fed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fed = () => (
         <div>
          <div className="loader">
<div className="bar" id="red"></div>
<div className="bar" id="mint"></div>
<div className="bar" id="grey"></div>
<div className="bar" id="purple"></div>
</div>
        </div>
        );

        export default Loader_fed;
        
        
         */
}

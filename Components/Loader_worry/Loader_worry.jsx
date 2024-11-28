import React from "react";
import styles from "./Loader_worry.module.css";

const Loader_worry = () => (
  <div>
    <div className={styles["blocks"]}>
      <div className={styles["block"]}></div>
      <div className={styles["block"]}></div>
      <div className={styles["block"]}></div>
      <div className={styles["block"]}></div>
    </div>
  </div>
);

export default Loader_worry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_worry = () => (
         <div>
          <div className="blocks">
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
</div>
        </div>
        );

        export default Loader_worry;
        
        
         */
}

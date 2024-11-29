import React from "react";
import styles from "./Loader_lying.module.css";

const Loader_lying = () => (
  <div>
    <div className={styles["loader-wrapper"]}>
      <div className={styles["packman"]}></div>
      <div className={styles["dots"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_lying;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_lying = () => (
         <div>
          <div className="loader-wrapper">
  <div className="packman"></div>
  <div className="dots">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
</div>
        </div>
        );

        export default Loader_lying;
        
        
         */
}

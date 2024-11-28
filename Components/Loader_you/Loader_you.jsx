import React from "react";
import styles from "./Loader_you.module.css";

const Loader_you = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["blue"] + styles["ball"]}></div>
      <div className={styles["red"] + styles["ball"]}></div>
      <div className={styles["yellow"] + styles["ball"]}></div>
      <div className={styles["green"] + styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_you;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_you = () => (
         <div>
          <div className="wrapper">
  <div className="blue ball"></div>
  <div className="red ball"></div>
  <div className="yellow ball"></div>
  <div className="green ball"></div>
</div>
        </div>
        );

        export default Loader_you;
        
        
         */
}

import React from "react";
import styles from "./Loader_climb.module.css";

const Loader_climb = () => (
  <div>
    <div className={styles["loader3"]}>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
    </div>
  </div>
);

export default Loader_climb;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_climb = () => (
         <div>
          <div className="loader3">
  <div className="circle1"></div>
  <div className="circle1"></div>
  <div className="circle1"></div>
  <div className="circle1"></div>
  <div className="circle1"></div>
</div>
        </div>
        );

        export default Loader_climb;
        
        
         */
}

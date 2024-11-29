import React from "react";
import styles from "./Loader_damage.module.css";

const Loader_damage = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["line-1"]}></div>
        <div className={styles["line-2"]}></div>
        <div className={styles["line-3"]}></div>
        <div className={styles["line-4"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_damage;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_damage = () => (
         <div>
          <div className="loader">
  <div className="wrapper">
    <div className="circle"></div>
    <div className="line-1"></div>
    <div className="line-2"></div>
    <div className="line-3"></div>
    <div className="line-4"></div>
  </div>
</div>
        </div>
        );

        export default Loader_damage;
        
        
         */
}

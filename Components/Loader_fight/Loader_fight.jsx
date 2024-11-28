import React from "react";
import styles from "./Loader_fight.module.css";

const Loader_fight = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cube"]}>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_fight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fight = () => (
         <div>
          <div className="loader">
    <div className="cube">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
    </div>
</div>
        </div>
        );

        export default Loader_fight;
        
        
         */
}
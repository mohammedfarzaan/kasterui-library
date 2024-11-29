import React from "react";
import styles from "./Loader_shoe.module.css";

const Loader_shoe = () => (
  <div>
    <div className={styles["fire"]}>
      <div className={styles["fire-left"]}>
        <div className={styles["main-fire"]}></div>
        <div className={styles["particle-fire"]}></div>
      </div>
      <div className={styles["fire-center"]}>
        <div className={styles["main-fire"]}></div>
        <div className={styles["particle-fire"]}></div>
      </div>
      <div className={styles["fire-right"]}>
        <div className={styles["main-fire"]}></div>
        <div className={styles["particle-fire"]}></div>
      </div>
      <div className={styles["fire-bottom"]}>
        <div className={styles["main-fire"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_shoe;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_shoe = () => (
         <div>
          <div className="fire">
  <div className="fire-left">
    <div className="main-fire"></div>
    <div className="particle-fire"></div>
  </div>
  <div className="fire-center">
    <div className="main-fire"></div>
    <div className="particle-fire"></div>
  </div>
  <div className="fire-right">
    <div className="main-fire"></div>
    <div className="particle-fire"></div>
  </div>
  <div className="fire-bottom">
    <div className="main-fire"></div>
  </div>
</div>
        </div>
        );

        export default Loader_shoe;
        
        
         */
}

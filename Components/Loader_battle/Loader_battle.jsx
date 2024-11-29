import React from "react";
import styles from "./Loader_battle.module.css";

const Loader_battle = () => (
  <div>
    <div className={styles["easter-animation"]}>
      <div className={styles["egg"]}>
        <div className={styles["eyes"]}></div>
      </div>
      <div className={styles["shadow"]}></div>
      <div className={styles["clouds"]}>
        <div className={styles["cloud1"]}></div>
        <div className={styles["cloud2"]}></div>
        <div className={styles["cloud3"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_battle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_battle = () => (
         <div>
          <div className="easter-animation">
  <div className="egg">
    <div className="eyes"></div>
  </div>
  <div className="shadow"></div>
  <div className="clouds">
    <div className="cloud1"></div>
    <div className="cloud2"></div>
    <div className="cloud3"></div>
  </div>
</div>
        </div>
        );

        export default Loader_battle;
        
        
         */
}

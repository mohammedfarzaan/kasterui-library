import React from "react";
import styles from "./Loader_hurt.module.css";

const Loader_hurt = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_hurt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_hurt = () => (
         <div>
          <div className="loader">
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
</div>
        </div>
        );

        export default Loader_hurt;
        
        
         */
}

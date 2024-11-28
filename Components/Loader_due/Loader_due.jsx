import React from "react";
import styles from "./Loader_due.module.css";

const Loader_due = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["panWrapper"]}>
        <div className={styles["pan"]}>
          <div className={styles["food"]}></div>
          <div className={styles["panBase"]}></div>
          <div className={styles["panHandle"]}></div>
        </div>
        <div className={styles["panShadow"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_due;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_due = () => (
         <div>
          <div className="loader">
  <div className="panWrapper">
    <div className="pan">
      <div className="food"></div>
      <div className="panBase"></div>
      <div className="panHandle"></div>
    </div>
    <div className="panShadow"></div>
  </div>
</div>
        </div>
        );

        export default Loader_due;
        
        
         */
}

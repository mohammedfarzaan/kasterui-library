import React from "react";
import styles from "./Loader_seeing.module.css";

const Loader_seeing = () => (
  <div>
    <div className={styles["spinner-container"]}>
      <div className={styles["spinner"]}>
        <div className={styles["spinner"]}>
          <div className={styles["spinner"]}>
            <div className={styles["spinner"]}>
              <div className={styles["spinner"]}>
                <div className={styles["spinner"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_seeing;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_seeing = () => (
         <div>
          <div className="spinner-container">
  <div className="spinner">
   <div className="spinner">
    <div className="spinner">
      <div className="spinner">
        <div className="spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_seeing;
        
        
         */
}

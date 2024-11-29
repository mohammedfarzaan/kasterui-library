import React from "react";
import styles from "./Loader_sweet.module.css";

const Loader_sweet = () => (
  <div>
    <div
      aria-busy="true"
      aria-label="Loading"
      role="progressbar"
      className={styles["container"]}
    >
      <div className={styles["swing"]}>
        <div className={styles["swing-l"]}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles["swing-r"]}></div>
      </div>
      <div className={styles["shadow"]}>
        <div className={styles["shadow-l"]}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles["shadow-r"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_sweet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sweet = () => (
         <div>
          <div aria-busy="true" aria-label="Loading" role="progressbar" className="container">
    <div className="swing">
        <div className="swing-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="swing-r"></div>
    </div>
    <div className="shadow">
        <div className="shadow-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="shadow-r"></div>
    </div>
</div>
        </div>
        );

        export default Loader_sweet;
        
        
         */
}

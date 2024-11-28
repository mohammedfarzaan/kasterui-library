import React from "react";
import styles from "./Loader_women.module.css";

const Loader_women = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["form1"]}>
        <div className={styles["square"]}></div>
        <div className={styles["square"]}></div>
      </div>
      <div className={styles["form2"]}>
        <div className={styles["square"]}></div>
        <div className={styles["square"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_women;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_women = () => (
         <div>
          <div className="loader">
  <div className="form1">
    <div className="square"></div>
    <div className="square"></div>
  </div>
  <div className="form2">
    <div className="square"></div>
    <div className="square"></div>
  </div>
</div>
        </div>
        );

        export default Loader_women;
        
        
         */
}

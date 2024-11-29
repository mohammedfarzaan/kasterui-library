import React from "react";
import styles from "./Loader_why.module.css";

const Loader_why = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["text"]}>LOADING</div>
        <div className={styles["box"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_why;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_why = () => (
         <div>
          <div className="loader">
  <div className="wrapper">
    <div className="text">LOADING</div>
    <div className="box"></div>
  </div>
</div>
        </div>
        );

        export default Loader_why;
        
        
         */
}

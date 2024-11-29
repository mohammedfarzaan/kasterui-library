import React from "react";
import styles from "./Loader_draw.module.css";

const Loader_draw = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["shadow"]}></div>
      <div className={styles["shadow"]}></div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Loader_draw;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_draw = () => (
         <div>
          <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
        </div>
        );

        export default Loader_draw;
        
        
         */
}

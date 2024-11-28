import React from "react";
import styles from "./Loader_golden.module.css";

const Loader_golden = () => (
  <div>
    <div className={styles["content"]}>
      <div className={styles["planet"]}>
        <div className={styles["ring"]}></div>
        <div className={styles["cover-ring"]}></div>
        <div className={styles["spots"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>loading</p>
    </div>
  </div>
);

export default Loader_golden;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_golden = () => (
         <div>
          <div className="content">
   <div className="planet">
      <div className="ring"></div>
         <div className="cover-ring"></div>
      <div className="spots">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>

      </div>
   </div>
   <p>loading</p>
</div>
        </div>
        );

        export default Loader_golden;
        
        
         */
}

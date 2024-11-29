import React from "react";
import styles from "./Loader_frame.module.css";

const Loader_frame = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box1"]}></div>
      <div className={styles["box2"]}></div>
      <div className={styles["box3"]}></div>
    </div>
  </div>
);

export default Loader_frame;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_frame = () => (
         <div>
          <div className="loader">
  <div className="box1"></div>
  <div className="box2"></div>
  <div className="box3"></div>
</div>
        </div>
        );

        export default Loader_frame;
        
        
         */
}

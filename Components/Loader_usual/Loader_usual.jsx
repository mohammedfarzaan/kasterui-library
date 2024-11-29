import React from "react";
import styles from "./Loader_usual.module.css";

const Loader_usual = () => (
  <div>
    <div className={styles["cube"]}>
      <div className={styles["cube_item"] + styles["cube_x"]}></div>
      <div className={styles["cube_item"] + styles["cube_y"]}></div>
      <div className={styles["cube_item"] + styles["cube_y"]}></div>
      <div className={styles["cube_item"] + styles["cube_x"]}></div>
    </div>
  </div>
);

export default Loader_usual;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_usual = () => (
         <div>
          <div className="cube">
  <div className="cube_item cube_x"></div>
  <div className="cube_item cube_y"></div>
  <div className="cube_item cube_y"></div>
  <div className="cube_item cube_x"></div>
</div>
        </div>
        );

        export default Loader_usual;
        
        
         */
}

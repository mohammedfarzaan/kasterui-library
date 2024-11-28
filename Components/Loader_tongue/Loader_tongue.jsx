import React from "react";
import styles from "./Loader_tongue.module.css";

const Loader_tongue = () => (
  <div>
    <div className={styles["loader"]}>
      <div
        className={styles["loader_cube"] + styles["loader_cube--color"]}
      ></div>
      <div
        className={styles["loader_cube"] + styles["loader_cube--glowing"]}
      ></div>
    </div>
  </div>
);

export default Loader_tongue;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_tongue = () => (
         <div>
          <div className="loader">
  <div className="loader_cube loader_cube--color"></div>
   <div className="loader_cube loader_cube--glowing"></div>
</div>
        </div>
        );

        export default Loader_tongue;
        
        
         */
}

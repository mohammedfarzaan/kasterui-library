import React from "react";
import styles from "./Loader_image.module.css";

const Loader_image = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["square"]}>
        <div className={styles["mini_square"] + styles["sq-1"]}></div>
        <div className={styles["mini_square"] + styles["sq-2"]}></div>
        <div className={styles["mini_square"]}></div>
        <div className={styles["mini_square"] + styles["sq-4"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_image;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_image = () => (
         <div>
          <div className="loader">
  <div className="square">
    <div className="mini_square sq-1"></div>
    <div className="mini_square sq-2"></div>
    <div className="mini_square"></div>
    <div className="mini_square sq-4"></div>
  </div>
</div>
        </div>
        );

        export default Loader_image;
        
        
         */
}

import React from "react";
import styles from "./Loader_exact.module.css";

const Loader_exact = () => (
  <div>
    <div className={styles["loader-box"]}>
      <div className={styles["loading-wrapper"]}>
        <div className={styles["loader"]}>
          <div className={styles["loader-inner"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_exact;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_exact = () => (
         <div>
          <div className="loader-box">
    <div className="loading-wrapper">
        <div className="loader">
            <div className="loader-inner">
            </div>
        </div>
    </div>
</div>
        </div>
        );

        export default Loader_exact;
        
        
         */
}

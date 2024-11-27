import React from "react";
import styles from "./Loader_cabin.module.css";

const Loader_cabin = () => (
  <div>
    <div className={styles["loader-wrapper"]}>
      <div className={styles["loader"]}>
        <div className={styles["loader"] + styles["loader-inner"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_cabin;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_cabin = () => (
         <div>
          <div className="loader-wrapper">
<div className="loader">
  <div className="loader loader-inner"></div>
  </div>
</div>
        </div>
        );

        export default Loader_cabin;
        
        
         */
}

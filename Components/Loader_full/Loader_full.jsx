import React from "react";
import styles from "./Loader_full.module.css";

const Loader_full = () => (
  <div>
    <div className={styles["loader-1"]}>
      <div className={styles["loader-2"]}></div>
      <div className={styles["loader-3"]}></div>
      <div className={styles["loader-4"]}></div>
    </div>
  </div>
);

export default Loader_full;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_full = () => (
         <div>
          <div className="loader-1">
  <div className="loader-2"></div>
  <div className="loader-3"></div>
  <div className="loader-4"></div>
</div>
        </div>
        );

        export default Loader_full;
        
        
         */
}

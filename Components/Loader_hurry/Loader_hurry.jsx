import React from "react";
import styles from "./Loader_hurry.module.css";

const Loader_hurry = () => (
  <div>
    <div className={styles["loading-spinner"]}>
      <div className={styles["loading-spinner-inner"]}>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
        <div className={styles["loading-spinner-circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_hurry;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hurry = () => (
         <div>
          <div className="loading-spinner">
  <div className="loading-spinner-inner">
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
    <div className="loading-spinner-circle"></div>
  </div>
</div>
        </div>
        );

        export default Loader_hurry;
        
        
         */
}

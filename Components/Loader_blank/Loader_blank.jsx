import React from "react";
import styles from "./Loader_blank.module.css";

const Loader_blank = () => (
  <div>
    <div className={styles["spinner-container"]}>
      <div className={styles["spinner-inner"]}>
        <div className={styles["spinner-outer"]}>
          <div className={styles["spinner-inner-1"]}></div>
          <div className={styles["spinner-inner-2"]}></div>
          <div className={styles["spinner-inner-3"]}></div>
          <div className={styles["spinner-inner-4"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_blank;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_blank = () => (
         <div>
          <div className="spinner-container">
  <div className="spinner-inner">
    <div className="spinner-outer">
      <div className="spinner-inner-1"></div>
      <div className="spinner-inner-2"></div>
      <div className="spinner-inner-3"></div>
      <div className="spinner-inner-4"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_blank;
        
        
         */
}

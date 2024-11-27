import React from "react";
import styles from "./Loader_these.module.css";

const Loader_these = () => (
  <div>
    <div className={styles["spinner"]}>
      <span className={styles["spinner-part-0"]}></span>
      <span className={styles["spinner-part-1"]}></span>
      <span className={styles["spinner-part-2"]}></span>
      <span className={styles["spinner-part-3"]}></span>
      <span className={styles["spinner-part-0"]}></span>
      <span className={styles["spinner-part-1"]}></span>
      <span className={styles["spinner-part-2"]}></span>
      <span className={styles["spinner-part-3"]}></span>
    </div>
  </div>
);

export default Loader_these;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_these = () => (
         <div>
          <div className="spinner">
  <span className="spinner-part-0"></span>
  <span className="spinner-part-1"></span>
  <span className="spinner-part-2"></span>
  <span className="spinner-part-3"></span>
  <span className="spinner-part-0"></span>
  <span className="spinner-part-1"></span>
  <span className="spinner-part-2"></span>
  <span className="spinner-part-3"></span>
</div>
        </div>
        );

        export default Loader_these;
        
        
         */
}

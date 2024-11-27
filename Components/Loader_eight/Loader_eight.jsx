import React from "react";
import styles from "./Loader_eight.module.css";

const Loader_eight = () => (
  <div>
    <div className={styles["loader"]}>
      <span style="--delay:1" className={styles["ball"]}></span>
      <span style="--delay:2" className={styles["ball"]}></span>
      <span style="--delay:3" className={styles["ball"]}></span>
      <span style="--delay:4" className={styles["ball"]}></span>
      <span style="--delay:5" className={styles["ball"]}></span>
      <span style="--delay:6" className={styles["ball"]}></span>
      <span style="--delay:7" className={styles["ball"]}></span>
      <span style="--delay:8" className={styles["ball"]}></span>
    </div>
  </div>
);

export default Loader_eight;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_eight = () => (
         <div>
          <div className="loader">
  <span style="--delay:1" className="ball"></span>
  <span style="--delay:2" className="ball"></span>
  <span style="--delay:3" className="ball"></span>
  <span style="--delay:4" className="ball"></span>
  <span style="--delay:5" className="ball"></span>
  <span style="--delay:6" className="ball"></span>
  <span style="--delay:7" className="ball"></span>
  <span style="--delay:8" className="ball"></span>
</div>
        </div>
        );

        export default Loader_eight;
        
        
         */
}

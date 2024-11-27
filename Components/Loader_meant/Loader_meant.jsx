import React from "react";
import styles from "./Loader_meant.module.css";

const Loader_meant = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_meant;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_meant = () => (
         <div>
          <div className="container">
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
</div>
        </div>
        );

        export default Loader_meant;
        
        
         */
}

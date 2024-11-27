import React from "react";
import styles from "./Loader_all.module.css";

const Loader_all = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
      <div className={styles["slice"]}></div>
    </div>
  </div>
);

export default Loader_all;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_all = () => (
         <div>
          <div className="container">
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
  <div className="slice"></div>
</div>
        </div>
        );

        export default Loader_all;
        
        
         */
}

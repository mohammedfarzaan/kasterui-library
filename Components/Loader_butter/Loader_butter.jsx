import React from "react";
import styles from "./Loader_butter.module.css";

const Loader_butter = () => (
  <div>
    <div
      aria-busy="true"
      aria-label="Loading"
      role="progressbar"
      className={styles["container"]}
    >
      <div className={styles["swing"]}>
        <div className={styles["swing-l"]}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles["swing-r"]}></div>
      </div>
      <div className={styles["shadow"]}>
        <div className={styles["shadow-l"]}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={styles["shadow-r"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_butter;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_butter = () => (
         <div>
          <div aria-busy="true" aria-label="Loading" role="progressbar" className="container">
    <div className="swing">
        <div className="swing-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="swing-r"></div>
    </div>
    <div className="shadow">
        <div className="shadow-l"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="shadow-r"></div>
    </div>
</div>
        </div>
        );

        export default Loader_butter;
        
        
         */
}

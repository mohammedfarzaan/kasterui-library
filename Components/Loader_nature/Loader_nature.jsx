import React from "react";
import styles from "./Loader_nature.module.css";

const Loader_nature = () => (
  <div>
    <div className={styles["loading-wave"]}>
      <div className={styles["loading-bar"]}></div>
      <div className={styles["loading-bar"]}></div>
      <div className={styles["loading-bar"]}></div>
      <div className={styles["loading-bar"]}></div>
    </div>
  </div>
);

export default Loader_nature;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_nature = () => (
         <div>
          <div className="loading-wave">
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
</div>
        </div>
        );

        export default Loader_nature;
        
        
         */
}

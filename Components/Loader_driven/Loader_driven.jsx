import React from "react";
import styles from "./Loader_driven.module.css";

const Loader_driven = () => (
  <div>
    <div className={styles["loading-container"]}>
      <div className={styles["loader"]}>
        <div className={styles["spinner"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_driven;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_driven = () => (
         <div>
          <div className="loading-container">
  <div className="loader">
    <div className="spinner"></div>
  </div>
</div>
        </div>
        );

        export default Loader_driven;
        
        
         */
}

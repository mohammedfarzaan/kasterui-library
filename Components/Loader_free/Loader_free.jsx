import React from "react";
import styles from "./Loader_free.module.css";

const Loader_free = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}></div>
      <div className={styles["loader-text"]}>Loading...</div>
    </div>
  </div>
);

export default Loader_free;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_free = () => (
         <div>
          <div className="loader-container">
  <div className="loader"></div>
  <div className="loader-text">Loading...</div>
</div>
        </div>
        );

        export default Loader_free;
        
        
         */
}

import React from "react";
import styles from "./Loader_stairs.module.css";

const Loader_stairs = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}></div>
      <div className={styles["loader"]}></div>
      <div className={styles["loader"]}></div>
      <div className={styles["loader"]}></div>
      <div className={styles["loader"]}></div>
    </div>
  </div>
);

export default Loader_stairs;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_stairs = () => (
         <div>
          <div className="container">
  <div className="loader"></div>
  <div className="loader"></div>
  <div className="loader"></div>
  <div className="loader"></div>
  <div className="loader"></div>
</div>
        </div>
        );

        export default Loader_stairs;
        
        
         */
}

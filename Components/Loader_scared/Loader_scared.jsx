import React from "react";
import styles from "./Loader_scared.module.css";

const Loader_scared = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["preloader"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Loader_scared;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_scared = () => (
         <div>
          <div className="container">
  <div className="preloader">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className="shadow"></div>
</div>
        </div>
        );

        export default Loader_scared;
        
        
         */
}

import React from "react";
import styles from "./Loader_tower.module.css";

const Loader_tower = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}>
        <div className={styles["crystal"]}></div>
        <div className={styles["crystal"]}></div>
        <div className={styles["crystal"]}></div>
        <div className={styles["crystal"]}></div>
        <div className={styles["crystal"]}></div>
        <div className={styles["crystal"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_tower;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tower = () => (
         <div>
          <div className="container">
  <div className="loader">
    <div className="crystal"></div>
    <div className="crystal"></div>
    <div className="crystal"></div>
    <div className="crystal"></div>
    <div className="crystal"></div>
    <div className="crystal"></div>
  </div>
</div>
        </div>
        );

        export default Loader_tower;
        
        
         */
}

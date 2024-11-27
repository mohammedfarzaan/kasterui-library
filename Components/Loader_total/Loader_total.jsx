import React from "react";
import styles from "./Loader_total.module.css";

const Loader_total = () => (
  <div>
    <div className={styles["loader"]}>
      <p className={styles["heading"]}>Loading</p>
      <div className={styles["loading"]}>
        <div className={styles["load"]}></div>
        <div className={styles["load"]}></div>
        <div className={styles["load"]}></div>
        <div className={styles["load"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_total;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_total = () => (
         <div>
          <div className="loader">
  <p className="heading">Loading</p>
  <div className="loading">
    <div className="load"></div>
    <div className="load"></div>
    <div className="load"></div>
    <div className="load"></div>
  </div>
</div>
        </div>
        );

        export default Loader_total;
        
        
         */
}

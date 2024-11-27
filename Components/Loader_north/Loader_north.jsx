import React from "react";
import styles from "./Loader_north.module.css";

const Loader_north = () => (
  <div>
    <div className={styles["sun"]}>
      <div className={styles["center"]}></div>
      <div className={styles["ray"] + styles["r-1"]}></div>
      <div className={styles["ray"] + styles["r-2"]}></div>
      <div className={styles["ray"] + styles["r-3"]}></div>
      <div className={styles["ray"] + styles["r-4"]}></div>
      <div className={styles["ray"] + styles["r-5"]}></div>
      <div className={styles["ray"] + styles["r-6"]}></div>
      <div className={styles["ray"] + styles["r-7"]}></div>
      <div className={styles["ray"] + styles["r-8"]}></div>
    </div>
  </div>
);

export default Loader_north;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_north = () => (
         <div>
          <div className="sun">
  <div className="center"></div>
  <div className="ray r-1"></div>
  <div className="ray r-2"></div>
  <div className="ray r-3"></div>
  <div className="ray r-4"></div>
  <div className="ray r-5"></div>
  <div className="ray r-6"></div>
  <div className="ray r-7"></div>
  <div className="ray r-8"></div>
</div>
        </div>
        );

        export default Loader_north;
        
        
         */
}

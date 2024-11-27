import React from "react";
import styles from "./Loader_flies.module.css";

const Loader_flies = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["load1"]}></div>
      <div className={styles["load2"]}></div>
      <div className={styles["load3"]}></div>
      <div className={styles["load4"]}></div>
      <div className={styles["load5"]}></div>
      <div className={styles["load6"]}></div>
      <div className={styles["load7"]}></div>
      <div className={styles["load8"]}></div>
      <div className={styles["load9"]}></div>
    </div>
  </div>
);

export default Loader_flies;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_flies = () => (
         <div>
          <div className="loader">
  <div className="load1"></div>
  <div className="load2"></div>
  <div className="load3"></div>
  <div className="load4"></div>
  <div className="load5"></div>
  <div className="load6"></div>
  <div className="load7"></div>
  <div className="load8"></div>
  <div className="load9"></div>
</div>
        </div>
        );

        export default Loader_flies;
        
        
         */
}

import React from "react";
import styles from "./Loader_flew.module.css";

const Loader_flew = () => (
  <div>
    <div className={styles["cube-loader"]}>
      <div className={styles["cube"] + styles["cube1"]}></div>
      <div className={styles["cube"] + styles["cube2"]}></div>
      <div className={styles["cube"] + styles["cube3"]}></div>
      <div className={styles["cube"] + styles["cube4"]}></div>
    </div>
  </div>
);

export default Loader_flew;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_flew = () => (
         <div>
          <div className="cube-loader">
  <div className="cube cube1"></div>
  <div className="cube cube2"></div>
  <div className="cube cube3"></div>
  <div className="cube cube4"></div>
</div>
        </div>
        );

        export default Loader_flew;
        
        
         */
}

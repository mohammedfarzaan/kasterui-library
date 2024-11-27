import React from "react";
import styles from "./Loader_castle.module.css";

const Loader_castle = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__ball"]}></div>
    </div>
  </div>
);

export default Loader_castle;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_castle = () => (
         <div>
          <div className="loader">
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__ball"></div>
</div>
        </div>
        );

        export default Loader_castle;
        
        
         */
}

import React from "react";
import styles from "./Loader_plenty.module.css";

const Loader_plenty = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-inner"]}>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
        <div className={styles["loader-block"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_plenty;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_plenty = () => (
         <div>
          <div className="loader">
  <div className="loader-inner">
    <div className="loader-block"></div>
    <div className="loader-block"></div>
    <div className="loader-block"></div>
    <div className="loader-block"></div>
    <div className="loader-block"></div>
    <div className="loader-block"></div>
    <div className="loader-block"></div>
    <div className="loader-block"></div>
  </div>
</div>
        </div>
        );

        export default Loader_plenty;
        
        
         */
}

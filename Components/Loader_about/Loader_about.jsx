import React from "react";
import styles from "./Loader_about.module.css";

const Loader_about = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-inner"]}>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
        <div className={styles["loader-line-wrap"]}>
          <div className={styles["loader-line"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_about;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_about = () => (
         <div>
          <div className="loader">
  <div className="loader-inner">
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_about;
        
        
         */
}

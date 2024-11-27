import React from "react";
import styles from "./Loader_canal.module.css";

const Loader_canal = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box"] + styles["box-1"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
      <div className={styles["box"] + styles["box-2"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
      <div className={styles["box"] + styles["box-3"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
      <div className={styles["box"] + styles["box-4"]}>
        <div className={styles["side-left"]}></div>
        <div className={styles["side-right"]}></div>
        <div className={styles["side-top"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_canal;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_canal = () => (
         <div>
          <div className="loader">
  <div className="box box-1">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-2">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-3">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-4">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
</div>
        </div>
        );

        export default Loader_canal;
        
        
         */
}

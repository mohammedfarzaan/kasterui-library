import React from "react";
import styles from "./Loader_better.module.css";

const Loader_better = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box"] + styles["box0"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box1"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box2"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box3"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box4"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box5"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box6"]}>
        <div></div>
      </div>
      <div className={styles["box"] + styles["box7"]}>
        <div></div>
      </div>
      <div className={styles["ground"]}>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader_better;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_better = () => (
         <div>
          <div className="loader">
  <div className="box box0">
    <div></div>
  </div>
  <div className="box box1">
    <div></div>
  </div>
  <div className="box box2">
    <div></div>
  </div>
  <div className="box box3">
    <div></div>
  </div>
  <div className="box box4">
    <div></div>
  </div>
  <div className="box box5">
    <div></div>
  </div>
  <div className="box box6">
    <div></div>
  </div>
  <div className="box box7">
    <div></div>
  </div>
  <div className="ground">
    <div></div>
  </div>
</div>
        </div>
        );

        export default Loader_better;
        
        
         */
}

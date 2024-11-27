import React from "react";
import styles from "./Loader_good.module.css";

const Loader_good = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["shape"]}>
        <div className={styles["numRowContainer"]}>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
          <div className={styles["numRow"]}>0 1 0 1 1 0 0 1</div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_good;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_good = () => (
         <div>
          <div className="loader">
  <div className="shape">
    <div className="numRowContainer">
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
      <div className="numRow">0 1 0 1 1 0 0 1</div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_good;
        
        
         */
}

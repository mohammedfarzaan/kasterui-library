import React from "react";
import styles from "./Loader_wheat.module.css";

const Loader_wheat = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader__balls"]}>
        <div className={styles["loader__balls__group"]}>
          <div className={styles["ball"] + styles["item1"]}></div>
          <div className={styles["ball"] + styles["item1"]}></div>
          <div className={styles["ball"] + styles["item1"]}></div>
        </div>
        <div className={styles["loader__balls__group"]}>
          <div className={styles["ball"] + styles["item2"]}></div>
          <div className={styles["ball"] + styles["item2"]}></div>
          <div className={styles["ball"] + styles["item2"]}></div>
        </div>
        <div className={styles["loader__balls__group"]}>
          <div className={styles["ball"] + styles["item3"]}></div>
          <div className={styles["ball"] + styles["item3"]}></div>
          <div className={styles["ball"] + styles["item3"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_wheat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wheat = () => (
         <div>
          <div className="loader">
  <div className="loader__balls">
    <div className="loader__balls__group">
      <div className="ball item1"></div>
      <div className="ball item1"></div>
      <div className="ball item1"></div>
    </div>
    <div className="loader__balls__group">
      <div className="ball item2"></div>
      <div className="ball item2"></div>
      <div className="ball item2"></div>
    </div>
    <div className="loader__balls__group">
      <div className="ball item3"></div>
      <div className="ball item3"></div>
      <div className="ball item3"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_wheat;
        
        
         */
}

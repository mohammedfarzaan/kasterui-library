import React from "react";
import styles from "./Loader_total.module.css";

const Loader_total = () => (
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

export default Loader_total;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_total = () => (
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

        export default Loader_total;
        
        
         */
}

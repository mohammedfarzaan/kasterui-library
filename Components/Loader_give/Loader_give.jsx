import React from "react";
import styles from "./Loader_give.module.css";

const Loader_give = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["loading-box"]}>
        <div className={styles["grid"]}>
          <div className={styles["color"] + styles["l1"]}></div>
          <div className={styles["color"] + styles["l2"]}></div>
          <div className={styles["color"] + styles["l3"]}></div>
          <div className={styles["color"] + styles["l4"]}></div>
          <div className={styles["color"] + styles["l5"]}></div>
          <div className={styles["color"] + styles["l6"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_give;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_give = () => (
         <div>
          <div className="loading">
  <div className="loading-box">
    <div className="grid">
      <div className="color l1"></div>
      <div className="color l2"></div>
      <div className="color l3"></div>
      <div className="color l4"></div>
      <div className="color l5"></div>
      <div className="color l6"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_give;
        
        
         */
}

import React from "react";
import styles from "./Loader_cap.module.css";

const Loader_cap = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["loading-box"]}>
        <div className={styles["WH"] + styles["color"] + styles["l1"]}></div>
        <div className={styles["ball"] + styles["color"]}></div>
        <div className={styles["WH"] + styles["color"] + styles["l2"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_cap;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_cap = () => (
         <div>
          <div className="loading">
  <div className="loading-box">
    <div className="WH color l1"></div>
    <div className="ball color"></div>
    <div className="WH color l2"></div>
  </div>
</div>
        </div>
        );

        export default Loader_cap;
        
        
         */
}

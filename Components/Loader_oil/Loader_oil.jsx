import React from "react";
import styles from "./Loader_oil.module.css";

const Loader_oil = () => (
  <div>
    <div className={styles["pinwheel"]}>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
      <div className={styles["pinwheel__line"]}></div>
    </div>
  </div>
);

export default Loader_oil;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_oil = () => (
         <div>
          <div className="pinwheel">
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
    <div className="pinwheel__line"></div>
</div>
        </div>
        );

        export default Loader_oil;
        
        
         */
}

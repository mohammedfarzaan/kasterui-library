import React from "react";
import styles from "./Loader_usual.module.css";

const Loader_usual = () => (
  <div>
    <div className={styles["banter-loader"]}>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
      <div className={styles["banter-loader__box"]}></div>
    </div>
  </div>
);

export default Loader_usual;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_usual = () => (
         <div>
          <div className="banter-loader">
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
</div>
        </div>
        );

        export default Loader_usual;
        
        
         */
}

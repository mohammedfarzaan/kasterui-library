import React from "react";
import styles from "./Loader_thy.module.css";

const Loader_thy = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
      <div className={styles["l"]}></div>
    </div>
  </div>
);

export default Loader_thy;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_thy = () => (
         <div>
          <div className="loader">
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
  <div className="l"></div>
</div>
        </div>
        );

        export default Loader_thy;
        
        
         */
}

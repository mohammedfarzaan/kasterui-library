import React from "react";
import styles from "./Loader_watch.module.css";

const Loader_watch = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["dot"] + styles["dot-1"]}></div>
      <div className={styles["dot"] + styles["dot-2"]}></div>
      <div className={styles["dot"] + styles["dot-3"]}></div>
      <div className={styles["dot"] + styles["dot-4"]}></div>
      <div className={styles["dot"] + styles["dot-5"]}></div>
    </div>
  </div>
);

export default Loader_watch;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_watch = () => (
         <div>
          <div className="loader">
  <div className="dot dot-1"></div>
  <div className="dot dot-2"></div>
  <div className="dot dot-3"></div>
  <div className="dot dot-4"></div>
  <div className="dot dot-5"></div>
</div>
        </div>
        );

        export default Loader_watch;
        
        
         */
}

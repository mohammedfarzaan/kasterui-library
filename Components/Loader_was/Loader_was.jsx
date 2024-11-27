import React from "react";
import styles from "./Loader_was.module.css";

const Loader_was = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-bar"] + styles["bar-1"]}></div>
      <div className={styles["loader-bar"] + styles["bar-2"]}></div>
      <div className={styles["loader-bar"] + styles["bar-3"]}></div>
      <div className={styles["loader-bar"] + styles["bar-4"]}></div>
    </div>
  </div>
);

export default Loader_was;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_was = () => (
         <div>
          <div className="loader">
  <div className="loader-bar bar-1"></div>
  <div className="loader-bar bar-2"></div>
  <div className="loader-bar bar-3"></div>
  <div className="loader-bar bar-4"></div>
</div>
        </div>
        );

        export default Loader_was;
        
        
         */
}

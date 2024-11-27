import React from "react";
import styles from "./Loader_wore.module.css";

const Loader_wore = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["line-1"]}></div>
        <div className={styles["line-2"]}></div>
        <div className={styles["line-3"]}></div>
        <div className={styles["line-4"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_wore;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wore = () => (
         <div>
          <div className="loader">
  <div className="wrapper">
    <div className="circle"></div>
    <div className="line-1"></div>
    <div className="line-2"></div>
    <div className="line-3"></div>
    <div className="line-4"></div>
  </div>
</div>
        </div>
        );

        export default Loader_wore;
        
        
         */
}

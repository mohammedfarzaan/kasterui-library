import React from "react";
import styles from "./Loader_drove.module.css";

const Loader_drove = () => (
  <div>
    <div className={styles["loader-3"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
    </div>
  </div>
);

export default Loader_drove;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_drove = () => (
         <div>
          <div className="loader-3">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
</div>
        </div>
        );

        export default Loader_drove;
        
        
         */
}

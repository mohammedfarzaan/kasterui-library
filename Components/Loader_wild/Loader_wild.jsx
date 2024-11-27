import React from "react";
import styles from "./Loader_wild.module.css";

const Loader_wild = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
    </div>
  </div>
);

export default Loader_wild;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wild = () => (
         <div>
          <div className="loader">
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
</div>
        </div>
        );

        export default Loader_wild;
        
        
         */
}

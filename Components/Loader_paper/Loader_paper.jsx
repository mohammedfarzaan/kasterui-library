import React from "react";
import styles from "./Loader_paper.module.css";

const Loader_paper = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["top-left"]}></div>
      <div className={styles["top-right"]}></div>
      <div className={styles["bottom-left"]}></div>
      <div className={styles["bottom-right"]}></div>
    </div>
  </div>
);

export default Loader_paper;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_paper = () => (
         <div>
          <div className="container">
    <div className="top-left"></div>
    <div className="top-right"></div>
    <div className="bottom-left"></div>
    <div className="bottom-right"></div>
</div>
        </div>
        );

        export default Loader_paper;
        
        
         */
}

import React from "react";
import styles from "./Loader_human.module.css";

const Loader_human = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"] + styles["circle-1"]}></div>
      <div className={styles["circle"] + styles["circle-2"]}></div>
      <div className={styles["circle"] + styles["circle-3"]}></div>
      <div className={styles["circle"] + styles["circle-4"]}></div>
    </div>
  </div>
);

export default Loader_human;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_human = () => (
         <div>
          <div className="loader">
  <div className="circle circle-1"></div>
  <div className="circle circle-2"></div>
  <div className="circle circle-3"></div>
  <div className="circle circle-4"></div>
</div>
        </div>
        );

        export default Loader_human;
        
        
         */
}

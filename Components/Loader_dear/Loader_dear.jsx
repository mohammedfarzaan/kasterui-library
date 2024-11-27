import React from "react";
import styles from "./Loader_dear.module.css";

const Loader_dear = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["item"] + styles["item-1"]}></div>
      <div className={styles["item"] + styles["item-2"]}></div>
      <div className={styles["item"] + styles["item-3"]}></div>
      <div className={styles["item"] + styles["item-4"]}></div>
    </div>
  </div>
);

export default Loader_dear;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_dear = () => (
         <div>
          <div className="container">
    <div className="item item-1"></div>
    <div className="item item-2"></div>
    <div className="item item-3"></div>
    <div className="item item-4"></div>
</div>
        </div>
        );

        export default Loader_dear;
        
        
         */
}

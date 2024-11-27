import React from "react";
import styles from "./Loader_slow.module.css";

const Loader_slow = () => (
  <div>
    <div className={styles["cssload-container"]}>
      <ul className={styles["cssload-flex-container"]}>
        <li>
          <span
            className={styles["cssload-loading"] + styles["cssload-one"]}
          ></span>
          <span
            className={styles["cssload-loading"] + styles["cssload-two"]}
          ></span>
          <span className={styles["cssload-loading-center"]}></span>
        </li>
      </ul>
    </div>
  </div>
);

export default Loader_slow;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_slow = () => (
         <div>
          <div className="cssload-container">
   <ul className="cssload-flex-container">
      <li>
         <span className="cssload-loading cssload-one"></span>
         <span className="cssload-loading cssload-two"></span>
         <span className="cssload-loading-center"></span>
      </li>
   </ul>
</div>
        </div>
        );

        export default Loader_slow;
        
        
         */
}

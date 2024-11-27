import React from "react";
import styles from "./Loader_too.module.css";

const Loader_too = () => (
  <div>
    <div className={styles["cube"] + styles["div"]}>
      <div className={styles["top"] + styles["div"]}></div>
      <div className={styles["div"]}>
        <span className={styles["span"]} style="--i: 0">
          <p>loading..</p>
          <p>loading..</p>
        </span>
        <span className={styles["span"]} style="--i: 1">
          <p>loading..</p>
          <p>loading..</p>
        </span>
        <span className={styles["span"]} style="--i: 2">
          <p>loading..</p>
          <p>loading..</p>
        </span>
        <span className={styles["span"]} style="--i: 3">
          <p>loading..</p>
          <p>loading..</p>
        </span>
      </div>
    </div>
  </div>
);

export default Loader_too;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_too = () => (
         <div>
          <div className="cube div">
    <div className="top div"></div>
    <div className="div">
      <span className="span" style="--i: 0">
        <p>loading..</p>
        <p>loading..</p>
      </span>
      <span className="span" style="--i: 1">
        <p>loading..</p>
        <p>loading..</p>
      </span>
      <span className="span" style="--i: 2">
        <p>loading..</p>
        <p>loading..</p>
      </span>
      <span className="span" style="--i: 3">
        <p>loading..</p>
        <p>loading..</p>
      </span>
    </div>
</div>
        </div>
        );

        export default Loader_too;
        
        
         */
}

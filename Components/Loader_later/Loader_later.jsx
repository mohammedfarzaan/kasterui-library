import React from "react";
import styles from "./Loader_later.module.css";

const Loader_later = () => (
  <div>
    <div className={styles["loader"]}>
      <span style="--i:1px" className={styles["load"]}></span>
      <span style="--i:2px" className={styles["load"]}></span>
      <span style="--i:3px" className={styles["load"]}></span>
      <span style="--i:4px" className={styles["load"]}></span>
      <span style="--i:5px" className={styles["load"]}></span>
      <span style="--i:6px" className={styles["load"]}></span>
      <span style="--i:7px" className={styles["load"]}></span>
      <span style="--i:8px" className={styles["load"]}></span>
      <span style="--i:9px" className={styles["load"]}></span>
      <span style="--i:10px" className={styles["load"]}></span>
    </div>
  </div>
);

export default Loader_later;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_later = () => (
         <div>
          <div className="loader">
  <span style="--i:1px" className="load"></span>
  <span style="--i:2px" className="load"></span>
  <span style="--i:3px" className="load"></span>
  <span style="--i:4px" className="load"></span>
  <span style="--i:5px" className="load"></span>
  <span style="--i:6px" className="load"></span>
  <span style="--i:7px" className="load"></span>
  <span style="--i:8px" className="load"></span>
  <span style="--i:9px" className="load"></span>
  <span style="--i:10px" className="load"></span>
</div>
        </div>
        );

        export default Loader_later;
        
        
         */
}

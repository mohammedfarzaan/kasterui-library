import React from "react";
import styles from "./Loader_pony.module.css";

const Loader_pony = () => (
  <div>
    <div className={styles["loader"]}>
      <div style="--i:1" className={styles["loader_item"]}></div>
      <div style="--i:2" className={styles["loader_item"]}></div>
      <div style="--i:3" className={styles["loader_item"]}></div>
      <div style="--i:4" className={styles["loader_item"]}></div>
      <div style="--i:5" className={styles["loader_item"]}></div>
      <div style="--i:6" className={styles["loader_item"]}></div>
      <div style="--i:7" className={styles["loader_item"]}></div>
      <div style="--i:8" className={styles["loader_item"]}></div>
      <div style="--i:9" className={styles["loader_item"]}></div>
      <div style="--i:10" className={styles["loader_item"]}></div>
      <div style="--i:11" className={styles["loader_item"]}></div>
      <div style="--i:12" className={styles["loader_item"]}></div>
    </div>
  </div>
);

export default Loader_pony;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_pony = () => (
         <div>
          <div className="loader">
  <div style="--i:1" className="loader_item"></div>
  <div style="--i:2" className="loader_item"></div>
  <div style="--i:3" className="loader_item"></div>
  <div style="--i:4" className="loader_item"></div>
  <div style="--i:5" className="loader_item"></div> 
  <div style="--i:6" className="loader_item"></div>
  <div style="--i:7" className="loader_item"></div>
  <div style="--i:8" className="loader_item"></div>
  <div style="--i:9" className="loader_item"></div>
  <div style="--i:10" className="loader_item"></div>
  <div style="--i:11" className="loader_item"></div>
  <div style="--i:12" className="loader_item"></div>
</div>
        </div>
        );

        export default Loader_pony;
        
        
         */
}

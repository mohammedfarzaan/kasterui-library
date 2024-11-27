import React from "react";
import styles from "./Loader_check.module.css";

const Loader_check = () => (
  <div>
    <div id="container">
      <label className={styles["loading-title"]}>Loading ...</label>
      <span className={styles["loading-circle"] + styles["sp1"]}>
        <span className={styles["loading-circle"] + styles["sp2"]}>
          <span className={styles["loading-circle"] + styles["sp3"]}></span>
        </span>
      </span>
    </div>
  </div>
);

export default Loader_check;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_check = () => (
         <div>
          <div id="container">
  <label className="loading-title">Loading ...</label>
  <span className="loading-circle sp1">
    <span className="loading-circle sp2">
      <span className="loading-circle sp3"></span>
    </span>
  </span>
</div>
        </div>
        );

        export default Loader_check;
        
        
         */
}

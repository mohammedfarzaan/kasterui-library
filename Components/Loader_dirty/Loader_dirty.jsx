import React from "react";
import styles from "./Loader_dirty.module.css";

const Loader_dirty = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
      <div className={styles["loader-square"]}></div>
    </div>
  </div>
);

export default Loader_dirty;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_dirty = () => (
         <div>
          <div className="loader">
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
</div>
        </div>
        );

        export default Loader_dirty;
        
        
         */
}

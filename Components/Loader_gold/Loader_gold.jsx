import React from "react";
import styles from "./Loader_gold.module.css";

const Loader_gold = () => (
  <div>
    <div className={styles["loaderContainer"]}>
      <div className={styles["particleContainer"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["particleContainer"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader_gold;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_gold = () => (
         <div>
          <div className="loaderContainer">
  <div className="particleContainer">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="particleContainer">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
        </div>
        );

        export default Loader_gold;
        
        
         */
}

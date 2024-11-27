import React from "react";
import styles from "./Loader_flower.module.css";

const Loader_flower = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cube"]}>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
        <div className={styles["side"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_flower;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_flower = () => (
         <div>
          <div className="loader">
  <div className="cube">
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
  </div>
</div>
        </div>
        );

        export default Loader_flower;
        
        
         */
}

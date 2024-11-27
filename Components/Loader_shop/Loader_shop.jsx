import React from "react";
import styles from "./Loader_shop.module.css";

const Loader_shop = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["red"] + styles["bar"]}></div>
      <div className={styles["orange"] + styles["bar"]}></div>
      <div className={styles["yellow"] + styles["bar"]}></div>
      <div className={styles["green"] + styles["bar"]}></div>
      <div className={styles["blue"] + styles["bar"]}></div>
      <div className={styles["violet"] + styles["bar"]}></div>
    </div>
  </div>
);

export default Loader_shop;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_shop = () => (
         <div>
          <div className="loader">
  <div className="red bar"></div>
  <div className="orange bar"></div>
  <div className="yellow bar"></div>
  <div className="green bar"></div>
  <div className="blue bar"></div>
  <div className="violet bar"></div>
</div>
        </div>
        );

        export default Loader_shop;
        
        
         */
}

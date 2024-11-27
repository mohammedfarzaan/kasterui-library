import React from "react";
import styles from "./Loader_deal.module.css";

const Loader_deal = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["block"] + styles["b_1"]}></div>
      <div className={styles["block"] + styles["b_2"]}></div>
      <div className={styles["block"] + styles["b_3"]}></div>
      <div className={styles["block"] + styles["b_4"]}></div>
      <div className={styles["block"] + styles["b_5"]}></div>
      <div className={styles["block"] + styles["b_6"]}></div>
      <div className={styles["block"] + styles["b_7"]}></div>
      <div className={styles["block"] + styles["b_8"]}></div>
    </div>
  </div>
);

export default Loader_deal;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_deal = () => (
         <div>
          <div className="loader">
  <div className="block b_1"></div>
  <div className="block b_2"></div>
  <div className="block b_3"></div>
  <div className="block b_4"></div>
  <div className="block b_5"></div>
  <div className="block b_6"></div>
  <div className="block b_7"></div>
  <div className="block b_8"></div>
</div>
        </div>
        );

        export default Loader_deal;
        
        
         */
}

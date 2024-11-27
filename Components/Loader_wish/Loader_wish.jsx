import React from "react";
import styles from "./Loader_wish.module.css";

const Loader_wish = () => (
  <div>
    <div className={styles["middle"]}>
      <div className={styles["bar"] + styles["bar1"]}></div>
      <div className={styles["bar"] + styles["bar2"]}></div>
      <div className={styles["bar"] + styles["bar3"]}></div>
      <div className={styles["bar"] + styles["bar4"]}></div>
      <div className={styles["bar"] + styles["bar5"]}></div>
      <div className={styles["bar"] + styles["bar6"]}></div>
      <div className={styles["bar"] + styles["bar7"]}></div>
      <div className={styles["bar"] + styles["bar8"]}></div>
    </div>
  </div>
);

export default Loader_wish;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wish = () => (
         <div>
          <div className="middle">
  <div className="bar bar1"></div>
  <div className="bar bar2"></div>
  <div className="bar bar3"></div>
  <div className="bar bar4"></div>
  <div className="bar bar5"></div>
  <div className="bar bar6"></div>
  <div className="bar bar7"></div>
  <div className="bar bar8"></div>
</div>
        </div>
        );

        export default Loader_wish;
        
        
         */
}

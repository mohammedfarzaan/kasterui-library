import React from "react";
import styles from "./Loader_union.module.css";

const Loader_union = () => (
  <div>
    <div className={styles["loader3"]}>
      <div className={styles["bars"] + styles["bar1"]}></div>
      <div className={styles["bars"] + styles["bar2"]}></div>
      <div className={styles["bars"] + styles["bar3"]}></div>
      <div className={styles["bars"] + styles["bar4"]}></div>
      <div className={styles["bars"] + styles["bar5"]}></div>
      <div className={styles["bars"] + styles["bar6"]}></div>
      <div className={styles["bars"] + styles["bar7"]}></div>
      <div className={styles["bars"] + styles["bar8"]}></div>
      <div className={styles["bars"] + styles["bar9"]}></div>
      <div className={styles["bars"] + styles["bar10"]}></div>
    </div>
  </div>
);

export default Loader_union;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_union = () => (
         <div>
          <div className="loader3">
  <div className="bars bar1"></div>
  <div className="bars bar2"></div>
  <div className="bars bar3"></div>
  <div className="bars bar4"></div>
  <div className="bars bar5"></div>
  <div className="bars bar6"></div>
  <div className="bars bar7"></div>
  <div className="bars bar8"></div>
  <div className="bars bar9"></div>
  <div className="bars bar10"></div>
</div>
        </div>
        );

        export default Loader_union;
        
        
         */
}

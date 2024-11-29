import React from "react";
import styles from "./Loader_too.module.css";

const Loader_too = () => (
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

export default Loader_too;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_too = () => (
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

        export default Loader_too;
        
        
         */
}

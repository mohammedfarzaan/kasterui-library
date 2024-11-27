import React from "react";
import styles from "./Loader_eaten.module.css";

const Loader_eaten = () => (
  <div>
    <div className={styles["gearbox"]}>
      <div className={styles["overlay"]}></div>
      <div className={styles["gear"] + styles["one"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
      <div className={styles["gear"] + styles["two"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
      <div className={styles["gear"] + styles["three"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
      <div className={styles["gear"] + styles["four"] + styles["large"]}>
        <div className={styles["gear-inner"]}>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
          <div className={styles["bar"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_eaten;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_eaten = () => (
         <div>
          <div className="gearbox">
  <div className="overlay"></div>
    <div className="gear one">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear two">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear three">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear four large">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  </div>
        </div>
        );

        export default Loader_eaten;
        
        
         */
}

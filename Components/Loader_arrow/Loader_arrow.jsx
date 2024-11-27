import React from "react";
import styles from "./Loader_arrow.module.css";

const Loader_arrow = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>

    <div className={styles["loader"] + styles["loader--reflect"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>
  </div>
);

export default Loader_arrow;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_arrow = () => (
         <div>
          <div className="loader">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>

<div className="loader loader--reflect">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>
        </div>
        );

        export default Loader_arrow;
        
        
         */
}

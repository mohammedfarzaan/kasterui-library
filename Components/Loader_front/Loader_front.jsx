import React from "react";
import styles from "./Loader_front.module.css";

const Loader_front = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["head"]}></div>

      <div className={styles["flames"]}>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
      </div>

      <div className={styles["eye"]}></div>
    </div>
  </div>
);

export default Loader_front;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_front = () => (
         <div>
          <div className="loader">
  <div className="head"></div>
  
  <div className="flames">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
  
  <div className="eye"></div>
</div>
        </div>
        );

        export default Loader_front;
        
        
         */
}

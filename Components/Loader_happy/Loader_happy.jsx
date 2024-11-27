import React from "react";
import styles from "./Loader_happy.module.css";

const Loader_happy = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
      <div className={styles["circle"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["outline"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_happy;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_happy = () => (
         <div>
          <div className="loader">
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
</div>
        </div>
        );

        export default Loader_happy;
        
        
         */
}

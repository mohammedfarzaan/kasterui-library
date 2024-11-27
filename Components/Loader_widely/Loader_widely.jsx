import React from "react";
import styles from "./Loader_widely.module.css";

const Loader_widely = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["container"]}>
        <div className={styles["carousel"]}>
          <div className={styles["love"]}></div>
          <div className={styles["love"]}></div>
          <div className={styles["love"]}></div>
          <div className={styles["love"]}></div>
          <div className={styles["love"]}></div>
          <div className={styles["love"]}></div>
          <div className={styles["love"]}></div>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["carousel"]}>
          <div className={styles["death"]}></div>
          <div className={styles["death"]}></div>
          <div className={styles["death"]}></div>
          <div className={styles["death"]}></div>
          <div className={styles["death"]}></div>
          <div className={styles["death"]}></div>
          <div className={styles["death"]}></div>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["carousel"]}>
          <div className={styles["robots"]}></div>
          <div className={styles["robots"]}></div>
          <div className={styles["robots"]}></div>
          <div className={styles["robots"]}></div>
          <div className={styles["robots"]}></div>
          <div className={styles["robots"]}></div>
          <div className={styles["robots"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_widely;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_widely = () => (
         <div>
          <div className="loader">
  <div className="container">
    <div className="carousel">
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
      <div className="love"></div>
    </div> 
  </div>
  <div className="container">
    <div className="carousel">
      <div className="death"></div>
      <div className="death"></div>
      <div className="death"></div>
      <div className="death"></div>
      <div className="death"></div>
      <div className="death"></div>
      <div className="death"></div>
    </div> 
  </div>
  <div className="container">
    <div className="carousel">
        <div className="robots"></div>
        <div className="robots"></div>
        <div className="robots"></div>
        <div className="robots"></div>
        <div className="robots"></div>
        <div className="robots"></div>
        <div className="robots"></div>
    </div> 
  </div>
</div>
        </div>
        );

        export default Loader_widely;
        
        
         */
}

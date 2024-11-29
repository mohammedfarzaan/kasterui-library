import React from "react";
import styles from "./Loader_choice.module.css";

const Loader_choice = () => (
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

export default Loader_choice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_choice = () => (
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

        export default Loader_choice;
        
        
         */
}

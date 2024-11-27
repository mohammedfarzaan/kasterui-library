import React from "react";
import styles from "./Loader_cell.module.css";

const Loader_cell = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["up"]}>
        <div className={styles["loaders"]}>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
          <div className={styles["loader"]}></div>
        </div>
        <div className={styles["loadersB"]}>
          <div className={styles["loaderA"]}>
            <div className={styles["ball0"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball1"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball2"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball3"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball4"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball5"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball6"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball7"]}></div>
          </div>
          <div className={styles["loaderA"]}>
            <div className={styles["ball8"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_cell;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_cell = () => (
         <div>
          <div className="main">
  <div className="up">
    <div className="loaders">
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
    <div className="loadersB">
      <div className="loaderA">
        <div className="ball0"></div>
      </div>
      <div className="loaderA">
        <div className="ball1"></div>
      </div>
      <div className="loaderA">
        <div className="ball2"></div>
      </div>
      <div className="loaderA">
        <div className="ball3"></div>
      </div>
      <div className="loaderA">
        <div className="ball4"></div>
      </div>
      <div className="loaderA">
        <div className="ball5"></div>
      </div>
      <div className="loaderA">
        <div className="ball6"></div>
      </div>
      <div className="loaderA">
        <div className="ball7"></div>
      </div>
      <div className="loaderA">
        <div className="ball8"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_cell;
        
        
         */
}

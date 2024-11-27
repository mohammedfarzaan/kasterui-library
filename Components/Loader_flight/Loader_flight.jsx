import React from "react";
import styles from "./Loader_flight.module.css";

const Loader_flight = () => (
  <div>
    <div className={styles["fire"]}>
      <div className={styles["fire-left"]}>
        <div className={styles["main-fire"]}></div>
        <div className={styles["particle-fire"]}></div>
      </div>
      <div className={styles["fire-center"]}>
        <div className={styles["main-fire"]}></div>
        <div className={styles["particle-fire"]}></div>
      </div>
      <div className={styles["fire-right"]}>
        <div className={styles["main-fire"]}></div>
        <div className={styles["particle-fire"]}></div>
      </div>
      <div className={styles["fire-bottom"]}>
        <div className={styles["main-fire"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_flight;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_flight = () => (
         <div>
          <div className="fire">
  <div className="fire-left">
    <div className="main-fire"></div>
    <div className="particle-fire"></div>
  </div>
  <div className="fire-center">
    <div className="main-fire"></div>
    <div className="particle-fire"></div>
  </div>
  <div className="fire-right">
    <div className="main-fire"></div>
    <div className="particle-fire"></div>
  </div>
  <div className="fire-bottom">
    <div className="main-fire"></div>
  </div>
</div>
        </div>
        );

        export default Loader_flight;
        
        
         */
}

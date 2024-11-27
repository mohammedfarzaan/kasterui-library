import React from "react";
import styles from "./Loader_down.module.css";

const Loader_down = () => (
  <div>
    <div className={styles["space-loader"]}>
      <div id="stars" className={styles["stars"]}></div>
      <div className={styles["orbit"]}></div>
      <div className={styles["ring"]}></div>
      <div className={styles["planet"]}></div>
      <div className={styles["satellite"]}></div>
    </div>
  </div>
);

export default Loader_down;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_down = () => (
         <div>
          <div className="space-loader">
  <div id="stars" className="stars"></div>
  <div className="orbit"></div>
  <div className="ring"></div>
  <div className="planet"></div>
  <div className="satellite"></div>
</div>
        </div>
        );

        export default Loader_down;
        
        
         */
}

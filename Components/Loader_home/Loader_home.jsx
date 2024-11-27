import React from "react";
import styles from "./Loader_home.module.css";

const Loader_home = () => (
  <div>
    <div
      style="--size: 64px; --dot-size: 6px; --dot-count: 6; --color: #fff; --speed: 1s; --spread: 60deg;"
      className={styles["dots"]}
    >
      <div style="--i: 0;" className={styles["dot"]}></div>
      <div style="--i: 1;" className={styles["dot"]}></div>
      <div style="--i: 2;" className={styles["dot"]}></div>
      <div style="--i: 3;" className={styles["dot"]}></div>
      <div style="--i: 4;" className={styles["dot"]}></div>
      <div style="--i: 5;" className={styles["dot"]}></div>
    </div>
  </div>
);

export default Loader_home;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_home = () => (
         <div>
          <div style="--size: 64px; --dot-size: 6px; --dot-count: 6; --color: #fff; --speed: 1s; --spread: 60deg;" className="dots">
  <div style="--i: 0;" className="dot"></div>
  <div style="--i: 1;" className="dot"></div>
  <div style="--i: 2;" className="dot"></div>
  <div style="--i: 3;" className="dot"></div>
  <div style="--i: 4;" className="dot"></div>
  <div style="--i: 5;" className="dot"></div>
</div>
        </div>
        );

        export default Loader_home;
        
        
         */
}

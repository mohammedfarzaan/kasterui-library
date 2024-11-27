import React from "react";
import styles from "./Loader_fought.module.css";

const Loader_fought = () => (
  <div>
    <main id="container">
      <div className={styles["dots"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
      </div>
      <div className={styles["dots2"]}>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot2"]}></div>
      </div>
      <div className={styles["circle"]}></div>
    </main>
  </div>
);

export default Loader_fought;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fought = () => (
         <div>
          <main id="container">
        
        <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        <div className="dots2">
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
            <div className="dot2"></div>
        </div>
        <div className="circle"></div>
    </main>
        </div>
        );

        export default Loader_fought;
        
        
         */
}

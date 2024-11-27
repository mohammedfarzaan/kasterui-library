import React from "react";
import styles from "./Loader_short.module.css";

const Loader_short = () => (
  <div>
    <div className={styles["cube"]}>
      <div className={styles["cube__face"]} id="cube__face--front">
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
      </div>

      <div className={styles["cube__face"]} id="cube__face--back">
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
      </div>

      <div className={styles["cube__face"]} id="cube__face--right">
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
      </div>

      <div className={styles["cube__face"]} id="cube__face--left">
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
      </div>

      <div className={styles["cube__face"]} id="cube__face--top">
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
      </div>

      <div className={styles["cube__face"]} id="cube__face--bottom">
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
        <span className={styles["faceBox"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_short;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_short = () => (
         <div>
          <div className="cube">
                <div className="cube__face" id="cube__face--front">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--back">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--right">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--left">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--top">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--bottom">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>
            </div>
        </div>
        );

        export default Loader_short;
        
        
         */
}

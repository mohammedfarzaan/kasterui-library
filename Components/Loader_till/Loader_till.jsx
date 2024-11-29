import React from "react";
import styles from "./Loader_till.module.css";

const Loader_till = () => (
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

export default Loader_till;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_till = () => (
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

        export default Loader_till;
        
        
         */
}

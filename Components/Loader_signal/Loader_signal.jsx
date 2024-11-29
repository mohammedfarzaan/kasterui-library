import React from "react";
import styles from "./Loader_signal.module.css";

const Loader_signal = () => (
  <div>
    <div id="triangle">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        version="1.1"
        viewBox="0 0 2000 2000"
      >
        <polygon
          className={styles["cls-1"]}
          points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
        ></polygon>
        <polygon
          className={styles["cls-3"]}
          points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
        ></polygon>
        <g id="Layer_2" data-name="Layer 2">
          <polygon
            className={styles["cls-2"]}
            points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
          ></polygon>
        </g>
      </svg>
    </div>
  </div>
);

export default Loader_signal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_signal = () => (
         <div>
          <div id="triangle">
  <svg id="Layer_1" data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
    <polygon
      className="cls-1"
      points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
    ></polygon>
    <polygon
      className="cls-3"
      points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
    ></polygon>
    <g id="Layer_2" data-name="Layer 2">
      <polygon
        className="cls-2"
        points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
      ></polygon>
    </g>
  </svg>
</div>
        </div>
        );

        export default Loader_signal;
        
        
         */
}

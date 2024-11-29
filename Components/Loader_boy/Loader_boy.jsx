import React from "react";
import styles from "./Loader_boy.module.css";

const Loader_boy = () => (
  <div>
    <div className={styles["loaderViewPort"]}>
      <div className={styles["loader"]}>
        <div className={styles["side"] + styles["front"]}>
          <div className={styles["dot"]}></div>
        </div>
        <div className={styles["side"] + styles["back"]}>
          <div className={styles["dotContainer"]}>
            <div className={styles["dot"]}></div>
            <div className={styles["dot"]}></div>
            <div className={styles["dot"]}></div>
          </div>
        </div>
        <div className={styles["side"] + styles["left"]}>
          <div className={styles["dotContainer"]}>
            <div className={styles["dot"]}></div>
            <div className={styles["dot"]}></div>
          </div>
        </div>
        <div className={styles["side"] + styles["right"]}>
          <div className={styles["dotContainer"]}>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["side"] + styles["top"]}>
          <div className={styles["dotContainer"]}>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
            </div>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["side"] + styles["bottom"]}>
          <div className={styles["dotContainer"]}>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
            <div className={styles["subDotContainer"]}>
              <div className={styles["dot"]}></div>
              <div className={styles["dot"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_boy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_boy = () => (
         <div>
          <div className="loaderViewPort">
  <div className="loader">
    <div className="side front">
      <div className="dot"></div>
    </div>
    <div className="side back">
      <div className="dotContainer">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
    <div className="side left">
      <div className="dotContainer">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
    <div className="side right">
      <div className="dotContainer">
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
    <div className="side top">
      <div className="dotContainer">
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="subDotContainer">
          <div className="dot"></div>
        </div>
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
    <div className="side bottom">
      <div className="dotContainer">
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="subDotContainer">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_boy;
        
        
         */
}

import React from "react";
import styles from "./Loader_spirit.module.css";

const Loader_spirit = () => (
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

export default Loader_spirit;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_spirit = () => (
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

        export default Loader_spirit;
        
        
         */
}

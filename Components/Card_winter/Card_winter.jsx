import React from "react";
import styles from "./Card_winter.module.css";

const Card_winter = () => (
  <div>
    <div className={styles["watch"]}>
      <div className={styles["frame"]}>
        <div className={styles["text"]}>
          <div>09</div>
          <div>55</div>
        </div>
      </div>
      <div className={styles["sideBtn"]}></div>
      <div className={styles["powerBtn"]}></div>
      <div className={styles["dots"]}>
        <span className={styles["dot"]}></span>
        <span className={styles["dot"]}></span>
        <span className={styles["dot"]}></span>
      </div>
    </div>
  </div>
);

export default Card_winter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_winter = () => (
         <div>
          <div className="watch">
  <div className="frame">
    <div className="text">
      <div>09</div>
      <div>55</div>
    </div>
  </div>
  <div className="sideBtn"></div>
  <div className="powerBtn"></div>
  <div className="dots">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>
        </div>
        );

        export default Card_winter;
        
        
         */
}

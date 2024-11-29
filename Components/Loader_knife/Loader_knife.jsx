import React from "react";
import styles from "./Loader_knife.module.css";

const Loader_knife = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loaderMiniContainer"]}>
        <div className={styles["barContainer"]}>
          <span className={styles["bar"]}></span>
          <span className={styles["bar"] + styles["bar2"]}></span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 101 114"
          className={styles["svgIcon"]}
        >
          <circle
            strokeWidth="7"
            stroke="black"
            transform="rotate(36.0692 46.1726 46.1727)"
            r="29.5497"
            cy="46.1727"
            cx="46.1726"
          ></circle>
          <line
            strokeWidth="7"
            stroke="black"
            y2="111.784"
            x2="97.7088"
            y1="67.7837"
            x1="61.7089"
          ></line>
        </svg>
      </div>
    </div>
  </div>
);

export default Loader_knife;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_knife = () => (
         <div>
          <div className="loader">
  <div className="loaderMiniContainer">
    <div className="barContainer">
      <span className="bar"></span>
      <span className="bar bar2"></span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 101 114"
      className="svgIcon"
    >
      <circle
        strokeWidth="7"
        stroke="black"
        transform="rotate(36.0692 46.1726 46.1727)"
        r="29.5497"
        cy="46.1727"
        cx="46.1726"
      ></circle>
      <line
        strokeWidth="7"
        stroke="black"
        y2="111.784"
        x2="97.7088"
        y1="67.7837"
        x1="61.7089"
      ></line>
    </svg>
  </div>
</div>
        </div>
        );

        export default Loader_knife;
        
        
         */
}

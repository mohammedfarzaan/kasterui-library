import React from "react";
import styles from "./Card_wide.module.css";

const Card_wide = () => (
  <div>
    <div
      className={
        styles["bg-black"] +
        styles["py-5"] +
        styles["d-flex"] +
        styles["justify-content-center"] +
        styles["align-items-center"]
      }
    >
      <div className={styles["obj"]}>
        <div className={styles["objchild"]}>
          <span className={styles["inn1"]}></span>
          <span className={styles["inn2"]}></span>
          <span className={styles["inn3"]}></span>
          <span className={styles["inn4"]}></span>
          <span className={styles["inn5"]}></span>
          <span className={styles["inn6"]}></span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_wide;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_wide = () => (
         <div>
          <div className="bg-black py-5 d-flex justify-content-center align-items-center">
    <div className="obj">
        <div className="objchild">
            <span className="inn1"></span>
            <span className="inn2"></span>
            <span className="inn3"></span>
            <span className="inn4"></span>
            <span className="inn5"></span>
            <span className="inn6"></span>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_wide;
        
        
         */
}

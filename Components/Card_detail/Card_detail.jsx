import React from "react";
import styles from "./Card_detail.module.css";

const Card_detail = () => (
  <div>
    <div className={styles["card"]}>
      <label className={styles["avatar"]}></label>
      <label className={styles["info"]}>
        <span className={styles["info-1"]}></span>
        <span className={styles["info-2"]}></span>
      </label>
      <div className={styles["content-1"]}></div>
      <div className={styles["content-2"]}></div>
    </div>
  </div>
);

export default Card_detail;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_detail = () => (
         <div>
          <div className="card">
  <label className="avatar"></label>
  <label className="info">
    <span className="info-1"></span>
    <span className="info-2"></span>
  </label>
  <div className="content-1"></div>
  <div className="content-2"></div>
</div>
        </div>
        );

        export default Card_detail;
        
        
         */
}

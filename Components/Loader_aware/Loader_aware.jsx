import React from "react";
import styles from "./Loader_aware.module.css";

const Loader_aware = () => (
  <div>
    <div className={styles["window"]}>
      <div className={styles["logo"]}>
        <p className={styles["top"]}>Microsoft</p>
        <p className={styles["mid"]}>
          Windows<span>XP</span>
        </p>
        <p className={styles["bottom"]}>Professional</p>
      </div>
      <div className={styles["container"]}>
        <div className={styles["box"]}></div>
        <div className={styles["box"]}></div>
        <div className={styles["box"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_aware;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_aware = () => (
         <div>
          <div className="window">
  <div className="logo">
    <p className="top">Microsoft</p>
    <p className="mid">Windows<span>XP</span></p>
    <p className="bottom">Professional</p>
  </div>
  <div className="container">
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
  </div>
</div>
        </div>
        );

        export default Loader_aware;
        
        
         */
}

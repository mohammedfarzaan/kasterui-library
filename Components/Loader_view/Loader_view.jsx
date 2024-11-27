import React from "react";
import styles from "./Loader_view.module.css";

const Loader_view = () => (
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

export default Loader_view;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_view = () => (
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

        export default Loader_view;
        
        
         */
}

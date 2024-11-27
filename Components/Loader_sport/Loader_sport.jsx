import React from "react";
import styles from "./Loader_sport.module.css";

const Loader_sport = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["tree"]}>
        <div className={styles["branch"]} style="--x:0">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div className={styles["branch"]} style="--x:1">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div className={styles["branch"]} style="--x:2">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div className={styles["branch"]} style="--x:3">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div className={styles["stem"]}>
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <span className={styles["shadow"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_sport;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sport = () => (
         <div>
          <div className="container">
  <div className="tree">
    <div className="branch" style="--x:0">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div className="branch" style="--x:1">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div className="branch" style="--x:2">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div className="branch" style="--x:3">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div className="stem">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <span className="shadow"></span>
  </div>
</div>
        </div>
        );

        export default Loader_sport;
        
        
         */
}

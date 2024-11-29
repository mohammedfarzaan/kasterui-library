import React from "react";
import styles from "./Loader_purple.module.css";

const Loader_purple = () => (
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

export default Loader_purple;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_purple = () => (
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

        export default Loader_purple;
        
        
         */
}

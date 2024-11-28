import React from "react";
import styles from "./Loader_empty.module.css";

const Loader_empty = () => (
  <div>
    <div className={styles["loading"]}>
      <span className={styles["l"]}>L</span>
      <span className={styles["o"]}>o</span>
      <span className={styles["a"]}>a</span>
      <span className={styles["d"]}>d</span>
      <span className={styles["i"]}>i</span>
      <span className={styles["n"]}>n</span>
      <span className={styles["g"]}>g</span>
      <span className={styles["d1"]}>.</span>
      <span className={styles["d2"]}>.</span>
      <div className={styles["load"]}>
        <div className={styles["progress"]}></div>
        <div className={styles["progress"]}></div>
        <div className={styles["progress"]}></div>
        <div className={styles["progress"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_empty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_empty = () => (
         <div>
          <div className="loading">
<span className="l">L</span>
<span className="o">o</span>
<span className="a">a</span>
<span className="d">d</span>
<span className="i">i</span>
<span className="n">n</span>
<span className="g">g</span>
<span className="d1">.</span>
<span className="d2">.</span>
<div className="load">
    <div className="progress"></div>
    <div className="progress"></div>
    <div className="progress"></div>
    <div className="progress"></div>
</div>
</div>
        </div>
        );

        export default Loader_empty;
        
        
         */
}

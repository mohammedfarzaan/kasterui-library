import React from "react";
import styles from "./Loader_push.module.css";

const Loader_push = () => (
  <div>
    <div className={styles["wrapper"]}>
      <span className={styles["letter"] + styles["letter1"]}>L</span>
      <span className={styles["letter"] + styles["letter2"]}>o</span>
      <span className={styles["letter"] + styles["letter3"]}>a</span>
      <span className={styles["letter"] + styles["letter4"]}>d</span>
      <span className={styles["letter"] + styles["letter5"]}>i</span>
      <span className={styles["letter"] + styles["letter6"]}>n</span>
      <span className={styles["letter"] + styles["letter7"]}>g</span>
      <span className={styles["letter"] + styles["letter8"]}>.</span>
      <span className={styles["letter"] + styles["letter9"]}>.</span>
      <span className={styles["letter"] + styles["letter10"]}>.</span>
    </div>
  </div>
);

export default Loader_push;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_push = () => (
         <div>
          <div className="wrapper">
  <span className="letter letter1">L</span>
  <span className="letter letter2">o</span>
  <span className="letter letter3">a</span>
  <span className="letter letter4">d</span>
  <span className="letter letter5">i</span>
  <span className="letter letter6">n</span>
  <span className="letter letter7">g</span>
  <span className="letter letter8">.</span>
  <span className="letter letter9">.</span>
  <span className="letter letter10">.</span>
</div>
        </div>
        );

        export default Loader_push;
        
        
         */
}

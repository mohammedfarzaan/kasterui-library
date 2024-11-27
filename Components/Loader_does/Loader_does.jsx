import React from "react";
import styles from "./Loader_does.module.css";

const Loader_does = () => (
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

export default Loader_does;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_does = () => (
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

        export default Loader_does;
        
        
         */
}

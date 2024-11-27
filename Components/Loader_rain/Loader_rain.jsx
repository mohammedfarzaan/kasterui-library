import React from "react";
import styles from "./Loader_rain.module.css";

const Loader_rain = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["l"]}>L</span>
      <span className={styles["o"]}>o</span>
      <span className={styles["a"]}>a</span>
      <span className={styles["d"]}>d</span>
      <span className={styles["i"]}>i</span>
      <span className={styles["n"]}>n</span>
      <span className={styles["g"]}>g</span>
      <span className={styles["d1"]}>.</span>
      <span className={styles["d2"]}>.</span>
    </div>
  </div>
);

export default Loader_rain;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rain = () => (
         <div>
          <div className="loader">
  <span className="l">L</span>
  <span className="o">o</span>
  <span className="a">a</span>
  <span className="d">d</span>
  <span className="i">i</span>
  <span className="n">n</span>
  <span className="g">g</span>
  <span className="d1">.</span>
  <span className="d2">.</span>
</div>
        </div>
        );

        export default Loader_rain;
        
        
         */
}

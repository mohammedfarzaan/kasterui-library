import React from "react";
import styles from "./Loader_rate.module.css";

const Loader_rate = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["ani"]}>L</span>
      <span className={styles["ani"]}>o</span>
      <span className={styles["ani"]}>a</span>
      <span className={styles["ani"]}>d</span>
      <span className={styles["ani"]}>i</span>
      <span className={styles["ani"]}>n</span>
      <span className={styles["ani"]}>g</span>
    </div>
  </div>
);

export default Loader_rate;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rate = () => (
         <div>
          <div className="loader"> 
      <span className="ani">L</span> 
      <span className="ani">o</span>
      <span className="ani">a</span>
      <span className="ani">d</span> 
      <span className="ani">i</span> 
      <span className="ani">n</span> 
      <span className="ani">g</span>
</div>
        </div>
        );

        export default Loader_rate;
        
        
         */
}

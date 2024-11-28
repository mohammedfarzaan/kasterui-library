import React from "react";
import styles from "./Loader_finger.module.css";

const Loader_finger = () => (
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

export default Loader_finger;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_finger = () => (
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

        export default Loader_finger;
        
        
         */
}

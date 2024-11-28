import React from "react";
import styles from "./Loader_told.module.css";

const Loader_told = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["loader"]}>
        <p>loading</p>
        <div className={styles["words"]}>
          <span className={styles["word"]}>buttons</span>
          <span className={styles["word"]}>forms</span>
          <span className={styles["word"]}>switches</span>
          <span className={styles["word"]}>cards</span>
          <span className={styles["word"]}>buttons</span>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_told;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_told = () => (
         <div>
          <div className="card">
  <div className="loader">
    <p>loading</p>
    <div className="words">
      <span className="word">buttons</span>
      <span className="word">forms</span>
      <span className="word">switches</span>
      <span className="word">cards</span>
      <span className="word">buttons</span>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_told;
        
        
         */
}

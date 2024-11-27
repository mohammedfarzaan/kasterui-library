import React from "react";
import styles from "./Loader_hunter.module.css";

const Loader_hunter = () => (
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

export default Loader_hunter;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hunter = () => (
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

        export default Loader_hunter;
        
        
         */
}

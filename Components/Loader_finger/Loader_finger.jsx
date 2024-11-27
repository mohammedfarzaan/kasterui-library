import React from "react";
import styles from "./Loader_finger.module.css";

const Loader_finger = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
    </div>
  </div>
);

export default Loader_finger;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_finger = () => (
         <div>
          <div className="loader">
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
</div>
        </div>
        );

        export default Loader_finger;
        
        
         */
}

import React from "react";
import styles from "./Loader_south.module.css";

const Loader_south = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cell"] + styles["d-0"]}></div>
      <div className={styles["cell"] + styles["d-1"]}></div>
      <div className={styles["cell"] + styles["d-2"]}></div>

      <div className={styles["cell"] + styles["d-1"]}></div>
      <div className={styles["cell"] + styles["d-2"]}></div>

      <div className={styles["cell"] + styles["d-2"]}></div>
      <div className={styles["cell"] + styles["d-3"]}></div>

      <div className={styles["cell"] + styles["d-3"]}></div>
      <div className={styles["cell"] + styles["d-4"]}></div>
    </div>
  </div>
);

export default Loader_south;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_south = () => (
         <div>
          <div className="loader">
  <div className="cell d-0"></div>
  <div className="cell d-1"></div>
  <div className="cell d-2"></div>

  <div className="cell d-1"></div>
  <div className="cell d-2"></div>
  
  
  <div className="cell d-2"></div>
  <div className="cell d-3"></div>
  
  
  <div className="cell d-3"></div>
  <div className="cell d-4"></div>
  
  
</div>
        </div>
        );

        export default Loader_south;
        
        
         */
}

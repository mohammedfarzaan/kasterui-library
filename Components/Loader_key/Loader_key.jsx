import React from "react";
import styles from "./Loader_key.module.css";

const Loader_key = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["worm"]}></div>
      <div className={styles["circleMiddle"]}></div>
    </div>
  </div>
);

export default Loader_key;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_key = () => (
         <div>
          <div className="loader">
  <div className="worm"></div>
  <div className="circleMiddle"></div>
</div>
        </div>
        );

        export default Loader_key;
        
        
         */
}

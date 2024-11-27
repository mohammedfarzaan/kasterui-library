import React from "react";
import styles from "./Loader_one.module.css";

const Loader_one = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bubble"]}></div>
      <div className={styles["bubble"]}></div>
      <div className={styles["bubble"]}></div>
    </div>
  </div>
);

export default Loader_one;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_one = () => (
         <div>
          <div className="loader">
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
</div>
        </div>
        );

        export default Loader_one;
        
        
         */
}

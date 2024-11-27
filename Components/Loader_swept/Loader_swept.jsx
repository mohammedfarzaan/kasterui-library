import React from "react";
import styles from "./Loader_swept.module.css";

const Loader_swept = () => (
  <div>
    <div className={styles["cssloader"]}>
      <div className={styles["triangle1"]}></div>
      <div className={styles["triangle2"]}></div>
      <p className={styles["text"]}>Please Wait</p>
    </div>
  </div>
);

export default Loader_swept;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_swept = () => (
         <div>
          <div className="cssloader">
  <div className="triangle1"></div>
  <div className="triangle2"></div>
  <p className="text">Please Wait</p>
</div>
        </div>
        );

        export default Loader_swept;
        
        
         */
}

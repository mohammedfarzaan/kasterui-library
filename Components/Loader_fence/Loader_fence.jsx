import React from "react";
import styles from "./Loader_fence.module.css";

const Loader_fence = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"] + styles["outer"]}></div>
      <div className={styles["circle"] + styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_fence;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fence = () => (
         <div>
          <div className="loader">
  <div className="circle outer"></div>
  <div className="circle inner"></div>
</div>
        </div>
        );

        export default Loader_fence;
        
        
         */
}

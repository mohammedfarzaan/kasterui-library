import React from "react";
import styles from "./Loader_after.module.css";

const Loader_after = () => (
  <div>
    <div className={styles["spinner-box"]}>
      <div className={styles["configure-border-1"]}>
        <div className={styles["configure-core"]}></div>
      </div>
      <div className={styles["configure-border-2"]}>
        <div className={styles["configure-core"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_after;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_after = () => (
         <div>
          <div className="spinner-box">
  <div className="configure-border-1">  
    <div className="configure-core"></div>
  </div>  
  <div className="configure-border-2">
    <div className="configure-core"></div>
  </div> 
</div>
        </div>
        );

        export default Loader_after;
        
        
         */
}

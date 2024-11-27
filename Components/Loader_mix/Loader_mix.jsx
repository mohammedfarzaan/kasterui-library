import React from "react";
import styles from "./Loader_mix.module.css";

const Loader_mix = () => (
  <div>
    <div className={styles["spinner-box"]}>
      <div className={styles["circle-border"]}>
        <div className={styles["circle-core"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_mix;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_mix = () => (
         <div>
          <div className="spinner-box">
  <div className="circle-border">
    <div className="circle-core"></div>
  </div>  
</div>
        </div>
        );

        export default Loader_mix;
        
        
         */
}

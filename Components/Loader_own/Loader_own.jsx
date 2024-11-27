import React from "react";
import styles from "./Loader_own.module.css";

const Loader_own = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["spinnerin"]}></div>
    </div>
  </div>
);

export default Loader_own;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_own = () => (
         <div>
          <div className="spinner">
    <div className="spinnerin"></div>
</div>
        </div>
        );

        export default Loader_own;
        
        
         */
}

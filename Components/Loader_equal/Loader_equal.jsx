import React from "react";
import styles from "./Loader_equal.module.css";

const Loader_equal = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["dot1"]}></div>
      <div className={styles["dot2"]}></div>
      <div className={styles["dot3"]}></div>
    </div>
  </div>
);

export default Loader_equal;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_equal = () => (
         <div>
          <div className="spinner">
<div className="dot1"></div>
<div className="dot2"></div>
<div className="dot3"></div>
</div>
        </div>
        );

        export default Loader_equal;
        
        
         */
}

import React from "react";
import styles from "./Loader_fort.module.css";

const Loader_fort = () => (
  <div>
    <div className={styles["frame"]}>
      <div className={styles["center"]}>
        <div className={styles["dot-1"]}></div>
        <div className={styles["dot-2"]}></div>
        <div className={styles["dot-3"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_fort;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fort = () => (
         <div>
          <div className="frame">
   <div className="center">
      <div className="dot-1"></div>
      <div className="dot-2"></div>
      <div className="dot-3"></div>
   </div>
</div>
        </div>
        );

        export default Loader_fort;
        
        
         */
}

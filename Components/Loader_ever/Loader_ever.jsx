import React from "react";
import styles from "./Loader_ever.module.css";

const Loader_ever = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["loader"] + styles["l1"]}></div>
      <div className={styles["loader"] + styles["l2"]}></div>
    </div>
  </div>
);

export default Loader_ever;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_ever = () => (
         <div>
          <div className="spinner">
<div className="loader l1"></div>
<div className="loader l2"></div>
</div>
        </div>
        );

        export default Loader_ever;
        
        
         */
}

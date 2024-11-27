import React from "react";
import styles from "./Loader_broad.module.css";

const Loader_broad = () => (
  <div>
    <div className={styles["superballs"]}>
      <div className={styles["superballs__dot"]}></div>
      <div className={styles["superballs__dot"]}></div>
    </div>
  </div>
);

export default Loader_broad;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_broad = () => (
         <div>
          <div className="superballs">
    <div className="superballs__dot"></div>
    <div className="superballs__dot"></div>
</div>
        </div>
        );

        export default Loader_broad;
        
        
         */
}

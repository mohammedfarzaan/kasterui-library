import React from "react";
import styles from "./Loader_small.module.css";

const Loader_small = () => (
  <div>
    <div className={styles["center-body"]}>
      <div className={styles["loader-shape-3"]}></div>
    </div>
  </div>
);

export default Loader_small;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_small = () => (
         <div>
          <div className="center-body">
  <div className="loader-shape-3"></div>
</div>
        </div>
        );

        export default Loader_small;
        
        
         */
}

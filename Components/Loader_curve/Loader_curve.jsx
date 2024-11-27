import React from "react";
import styles from "./Loader_curve.module.css";

const Loader_curve = () => (
  <div>
    <div className={styles["item"]}>
      <div className={styles["loader-pulse"]}></div>
    </div>
  </div>
);

export default Loader_curve;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_curve = () => (
         <div>
          <div className="item">
    <div className="loader-pulse"></div>
</div>
        </div>
        );

        export default Loader_curve;
        
        
         */
}

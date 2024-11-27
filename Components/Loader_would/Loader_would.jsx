import React from "react";
import styles from "./Loader_would.module.css";

const Loader_would = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["light"]}></div>
      <div className={styles["black_overlay"]}></div>
    </div>
  </div>
);

export default Loader_would;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_would = () => (
         <div>
          <div className="loader">
  <div className="light"></div>
  <div className="black_overlay"></div>
</div>
        </div>
        );

        export default Loader_would;
        
        
         */
}

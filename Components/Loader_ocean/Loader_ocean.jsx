import React from "react";
import styles from "./Loader_ocean.module.css";

const Loader_ocean = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-in"]}></div>
      <div className={styles["loader-dot"]}></div>
    </div>
  </div>
);

export default Loader_ocean;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_ocean = () => (
         <div>
          <div className="loader">
    <div className="loader-in"></div>
    <div className="loader-dot"></div>
</div>
        </div>
        );

        export default Loader_ocean;
        
        
         */
}

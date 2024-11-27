import React from "react";
import styles from "./Loader_broken.module.css";

const Loader_broken = () => (
  <div>
    <div className={styles["progress"]}>
      <div className={styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_broken;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_broken = () => (
         <div>
          <div className="progress">
      <div className="inner"></div>
</div>
        </div>
        );

        export default Loader_broken;
        
        
         */
}

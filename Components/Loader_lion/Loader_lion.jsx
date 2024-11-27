import React from "react";
import styles from "./Loader_lion.module.css";

const Loader_lion = () => (
  <div>
    <div className={styles["animation"]}>Text writing!</div>
  </div>
);

export default Loader_lion;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_lion = () => (
         <div>
          <div className="animation">Text writing!</div>
        </div>
        );

        export default Loader_lion;
        
        
         */
}

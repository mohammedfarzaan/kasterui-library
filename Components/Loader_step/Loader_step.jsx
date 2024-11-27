import React from "react";
import styles from "./Loader_step.module.css";

const Loader_step = () => (
  <div>
    <div className={styles["mover"]}></div>
  </div>
);

export default Loader_step;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_step = () => (
         <div>
          <div className="mover"></div>
        </div>
        );

        export default Loader_step;
        
        
         */
}

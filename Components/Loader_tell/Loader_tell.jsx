import React from "react";
import styles from "./Loader_tell.module.css";

const Loader_tell = () => (
  <div>
    <div className={styles["triangle"]}></div>
    <div className={styles["triangle-shadow"]}></div>
  </div>
);

export default Loader_tell;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tell = () => (
         <div>
          <div className="triangle"></div>
<div className="triangle-shadow"></div>
        </div>
        );

        export default Loader_tell;
        
        
         */
}

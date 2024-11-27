import React from "react";
import styles from "./Loader_live.module.css";

const Loader_live = () => (
  <div>
    <div className={styles["loader"] + styles["loader_bubble"]}></div>
  </div>
);

export default Loader_live;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_live = () => (
         <div>
          <div className="loader loader_bubble"></div>
        </div>
        );

        export default Loader_live;
        
        
         */
}
